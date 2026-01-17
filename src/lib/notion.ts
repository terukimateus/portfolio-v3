const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";
const MONTH_ABBREVIATIONS = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];
const databaseIdCache = new Map<string, string>();

type NotionProperty = {
  type: string;
  title?: Array<{ plain_text: string }>;
  rich_text?: Array<{ plain_text: string }>;
  date?: { start?: string | null } | null;
};

type NotionRichText = {
  type: string;
  plain_text: string;
  href: string | null;
  text: {
    content: string;
    link: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
};

type NotionBlock = {
  id: string;
  type: string;
  has_children?: boolean;
  children?: NotionBlock[];
  paragraph?: { rich_text: NotionRichText[] };
  heading_1?: { rich_text: NotionRichText[] };
  heading_2?: { rich_text: NotionRichText[] };
  heading_3?: { rich_text: NotionRichText[] };
  bulleted_list_item?: { rich_text: NotionRichText[] };
  numbered_list_item?: { rich_text: NotionRichText[] };
  quote?: { rich_text: NotionRichText[] };
  callout?: { rich_text: NotionRichText[] };
  code?: { rich_text: NotionRichText[]; language: string };
  image?: {
    type: "external" | "file";
    caption: NotionRichText[];
    external?: { url: string };
    file?: { url: string };
  };
  to_do?: { rich_text: NotionRichText[]; checked: boolean };
  toggle?: { rich_text: NotionRichText[] };
  divider?: Record<string, never>;
};

type NotionPageResult = {
  id: string;
  url: string;
  properties: Record<string, NotionProperty>;
};

type NotionQueryResponse = {
  results: NotionPageResult[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string | null;
  publishedAtRaw: string | null;
  notionUrl: string;
};

export type BlogArticle = BlogPost & {
  bodyHtml: string;
  blocks: NotionBlock[];
};

const TITLE_KEYS = ["Título", "Title", "Nome", "Name"];
const SUMMARY_KEYS = ["Description", "Resumo", "Summary"];
const SLUG_KEYS = ["Slug", "slug", "Path"];
const DATE_KEYS = ["PublishedAt", "Published", "Date"];

function requireEnvValue(key: string, value?: string) {
  if (!value) {
    throw new Error(`Missing environment variable ${key}`);
  }

  return value;
}

function buildHeaders(includeContentType = false) {
  const token = requireEnvValue("NOTION_TOKEN", process.env.NOTION_TOKEN);
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
  };

  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
}

async function ensureDatabaseId(initialId: string): Promise<string> {
  const cached = databaseIdCache.get(initialId);
  if (cached) {
    return cached;
  }

  const response = await fetch(`${NOTION_API_BASE}/databases/${initialId}`, {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });

  if (response.ok) {
    databaseIdCache.set(initialId, initialId);
    return initialId;
  }

  const payload = await response.json().catch(() => null);
  const message = typeof payload?.message === "string" ? payload.message : null;

  if (
    response.status === 400 &&
    message &&
    message.toLowerCase().includes("page") &&
    message.toLowerCase().includes("database")
  ) {
    const childDatabaseId = await findChildDatabase(initialId);
    databaseIdCache.set(initialId, childDatabaseId);
    databaseIdCache.set(childDatabaseId, childDatabaseId);
    return childDatabaseId;
  }

  throw new Error(
    `Unable to resolve Notion database (${initialId}): ${
      message ?? "unknown error"
    }`
  );
}

async function findChildDatabase(pageId: string): Promise<string> {
  const response = await fetch(
    `${NOTION_API_BASE}/blocks/${pageId}/children?page_size=50`,
    {
      headers: buildHeaders(),
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    const dump = await response.text();
    throw new Error(`Unable to read Notion page contents: ${dump}`);
  }

  const payload = (await response.json()) as {
    results: Array<{ id: string; type: string }>;
  };

  const childDatabase = payload.results.find(
    (block) => block.type === "child_database"
  );

  if (!childDatabase) {
    throw new Error(`Notion page ${pageId} does not contain a database block`);
  }

  return childDatabase.id;
}

function readPropertyValue<T>(
  properties: Record<string, NotionProperty>,
  keys: string[],
  reader: (property: NotionProperty) => T | null
) {
  for (const key of keys) {
    const property = properties[key];
    if (!property) {
      continue;
    }

    const value = reader(property);
    if (value) {
      return value;
    }
  }

  return null;
}

function readTitle(property: NotionProperty): string | null {
  if (property.type !== "title" || !Array.isArray(property.title)) {
    return null;
  }

  const text = property.title.map((block) => block.plain_text).join("");
  return text.trim() || null;
}

function readRichText(property: NotionProperty): string | null {
  if (property.type !== "rich_text" || !Array.isArray(property.rich_text)) {
    return null;
  }

  const text = property.rich_text.map((block) => block.plain_text).join("");
  return text.trim() || null;
}

function readDate(property: NotionProperty): string | null {
  if (property.type !== "date" || !property.date) {
    return null;
  }

  return property.date.start ?? null;
}

function formatPublishedDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) {
    return null;
  }

  const day = parsed.getUTCDate().toString().padStart(2, "0");
  const month = (parsed.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = parsed.getUTCFullYear();

  return `${month}/${day}/${year}`;
}

function slugify(value: string) {
  const normalized = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    normalized ||
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}

function mapNotionPageToPost(page: NotionPageResult): BlogPost | null {
  const title = readPropertyValue(page.properties, TITLE_KEYS, readTitle);
  if (!title) {
    return null;
  }

  const summary =
    readPropertyValue(page.properties, SUMMARY_KEYS, readRichText) ?? "";
  const slugFromField = readPropertyValue(
    page.properties,
    SLUG_KEYS,
    readRichText
  );
  const publishedAtRaw = readPropertyValue(
    page.properties,
    DATE_KEYS,
    readDate
  );

  const slugCandidate = slugFromField || slugify(title) || page.id;
  const publishedAt = publishedAtRaw
    ? formatPublishedDate(publishedAtRaw)
    : null;

  return {
    id: page.id,
    slug: slugCandidate,
    title,
    summary,
    notionUrl: page.url,
    publishedAt,
    publishedAtRaw,
  };
}

function normalizePageSize(value?: number) {
  if (!value || Number.isNaN(value)) {
    return 20;
  }

  if (value <= 0) {
    return 1;
  }

  if (value > 100) {
    return 100;
  }

  return Math.floor(value);
}

async function queryDatabase(
  databaseId: string,
  body: Record<string, unknown>
): Promise<NotionQueryResponse> {
  const response = await fetch(
    `${NOTION_API_BASE}/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: buildHeaders(true),
      body: JSON.stringify(body),
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message =
      typeof payload?.message === "string" ? payload.message : "unknown";
    throw new Error(`Failed to load Notion posts: ${message}`);
  }

  return response.json() as Promise<NotionQueryResponse>;
}

async function fetchPageBySlug(
  databaseId: string,
  slug: string
): Promise<NotionPageResult | null> {
  const payload = await queryDatabase(databaseId, {
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    page_size: 1,
  });

  return payload.results[0] ?? null;
}

async function fetchBlocks(blockId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | null = null;

  do {
    const url = new URL(`${NOTION_API_BASE}/blocks/${blockId}/children`);
    url.searchParams.set("page_size", "50");
    if (cursor) {
      url.searchParams.set("start_cursor", cursor);
    }

    const response = await fetch(url.toString(), {
      headers: buildHeaders(),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const dump = await response.text();
      throw new Error(`Unable to load Notion block ${blockId}: ${dump}`);
    }

    const payload = (await response.json()) as {
      results: NotionBlock[];
      next_cursor: string | null;
    };

    blocks.push(...payload.results);
    cursor = payload.next_cursor;
  } while (cursor);

  return blocks;
}

async function fetchBlocksWithChildren(
  blockId: string
): Promise<NotionBlock[]> {
  const items = await fetchBlocks(blockId);

  return Promise.all(
    items.map(async (block) => {
      if (!block.has_children) {
        return block;
      }

      const children = await fetchBlocksWithChildren(block.id);
      return {
        ...block,
        children,
      };
    })
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getBlockRichText(block: NotionBlock): NotionRichText[] {
  const blockPayload = (block as Record<string, any>)[block.type];
  if (!blockPayload) {
    return [];
  }

  if (Array.isArray(blockPayload.rich_text)) {
    return blockPayload.rich_text;
  }

  if (Array.isArray(blockPayload.caption)) {
    return blockPayload.caption;
  }

  return [];
}

function renderRichTextSegments(segments: NotionRichText[]): string {
  return segments
    .map((segment) => {
      const content = escapeHtml(segment.text.content);
      const linkUrl = segment.text.link?.url;
      let formatted = content;

      if (segment.annotations.code) {
        formatted = `<code>${formatted}</code>`;
      }

      if (segment.annotations.bold) {
        formatted = `<strong>${formatted}</strong>`;
      }

      if (segment.annotations.italic) {
        formatted = `<em>${formatted}</em>`;
      }

      if (segment.annotations.strikethrough) {
        formatted = `<s>${formatted}</s>`;
      }

      if (segment.annotations.underline) {
        formatted = `<u>${formatted}</u>`;
      }

      if (linkUrl) {
        formatted = `<a href="${escapeHtml(
          linkUrl
        )}" target="_blank" rel="noreferrer">${formatted}</a>`;
      }

      return formatted;
    })
    .join("");
}

function renderBlocksToHtml(blocks: NotionBlock[]): string {
  const parts: string[] = [];
  let listBuffer: {
    type: "bulleted" | "numbered";
    blocks: NotionBlock[];
  } | null = null;

  const flushList = () => {
    if (!listBuffer) {
      return;
    }

    const tag = listBuffer.type === "bulleted" ? "ul" : "ol";
    const listItems = listBuffer.blocks
      .map(
        (block) =>
          `<li>${renderBlockInnerContent(block)}${renderBlockChildren(
            block
          )}</li>`
      )
      .join("");

    parts.push(`<${tag}>${listItems}</${tag}>`);
    listBuffer = null;
  };

  for (const block of blocks) {
    if (
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item"
    ) {
      const type =
        block.type === "bulleted_list_item" ? "bulleted" : "numbered";

      if (!listBuffer || listBuffer.type !== type) {
        flushList();
        listBuffer = { type, blocks: [] };
      }

      listBuffer.blocks.push(block);
      continue;
    }

    flushList();
    parts.push(renderSingleBlock(block));
  }

  flushList();

  return parts.join("");
}

function renderBlockChildren(block: NotionBlock): string {
  if (!block.children || block.children.length === 0) {
    return "";
  }

  return `<div class="mt-2 ml-5">${renderBlocksToHtml(block.children)}</div>`;
}

function renderBlockInnerContent(block: NotionBlock): string {
  return renderRichTextSegments(getBlockRichText(block));
}

function renderSingleBlock(block: NotionBlock): string {
  const text = renderRichTextSegments(getBlockRichText(block));
  const children = renderBlockChildren(block);

  switch (block.type) {
    case "paragraph":
      return `<p>${text}</p>${children}`;
    case "heading_1":
      return `<h1>${text}</h1>${children}`;
    case "heading_2":
      return `<h2>${text}</h2>${children}`;
    case "heading_3":
      return `<h3>${text}</h3>${children}`;
    case "quote":
      return `<blockquote>${text}</blockquote>${children}`;
    case "callout":
      return `<div class="border-l-4 border-primary/50 bg-muted/5 px-4 py-3 mb-3"><p>${text}</p></div>${children}`;
    case "code":
      return `<pre class="rounded-2xl bg-slate-950 text-sm"><code class="language-${escapeHtml(
        block.code?.language ?? ""
      )}">${escapeHtml(
        formatPlainText(getBlockRichText(block))
      )}</code></pre>${children}`;
    case "divider":
      return `<hr class="my-6"/>`;
    case "image": {
      const imageUrl = block.image?.file?.url ?? block.image?.external?.url;
      if (!imageUrl) {
        return children;
      }

      const caption = renderRichTextSegments(block.image?.caption ?? []);
      const alt = caption || block.type;

      return `<figure class="my-6"><img src="${escapeHtml(
        imageUrl
      )}" alt="${escapeHtml(alt)}" class="w-full rounded-lg" />${
        caption
          ? `<figcaption class="text-xs text-muted-foreground mt-1">${caption}</figcaption>`
          : ""
      }</figure>${children}`;
    }
    case "toggle":
      return `<details class="mb-3"><summary class="cursor-pointer font-semibold">${text}</summary>${children}</details>`;
    case "to_do":
      return `<div class="flex items-start gap-2"><span class="text-xs">${
        block.to_do?.checked ? "☑" : "☐"
      }</span><span>${text}</span></div>${children}`;
    default:
      return `<p>${text}</p>${children}`;
  }
}

function formatPlainText(richText: NotionRichText[]): string {
  return richText.map((segment) => segment.text.content).join("");
}

export async function getBlogPosts(options?: {
  pageSize?: number;
}): Promise<BlogPost[]> {
  const databaseId = await ensureDatabaseId(
    requireEnvValue("NOTION_POSTS_DB_ID", process.env.NOTION_POSTS_DB_ID)
  );

  const payload = await queryDatabase(databaseId, {
    sorts: [
      {
        property: "PublishedAt",
        direction: "descending",
      },
    ],
    page_size: normalizePageSize(options?.pageSize),
  });

  return payload.results
    .map(mapNotionPageToPost)
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => {
      const aDate = a.publishedAtRaw ? new Date(a.publishedAtRaw).valueOf() : 0;
      const bDate = b.publishedAtRaw ? new Date(b.publishedAtRaw).valueOf() : 0;
      return bDate - aDate;
    });
}

export async function getBlogArticleBySlug(
  slug: string
): Promise<BlogArticle | null> {
  const databaseId = await ensureDatabaseId(
    requireEnvValue("NOTION_POSTS_DB_ID", process.env.NOTION_POSTS_DB_ID)
  );

  const directPage = await fetchPageBySlug(databaseId, slug);
  let basePost: BlogPost | null = directPage
    ? mapNotionPageToPost(directPage)
    : null;

  if (!basePost) {
    const fallbackPosts = await getBlogPosts({ pageSize: 100 });
    basePost = fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  if (!basePost) {
    return null;
  }

  const blocks = await fetchBlocksWithChildren(basePost.id);
  const bodyHtml = renderBlocksToHtml(blocks);

  return {
    ...basePost,
    blocks,
    bodyHtml,
  };
}
