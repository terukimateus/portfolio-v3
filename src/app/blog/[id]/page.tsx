import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle, getBlogArticleBySlug } from "@/lib/notion";

export default async function BlogArticlePage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await params;
  let article: BlogArticle | null = null;
  let fetchError: string | null = null;

  try {
    article = await getBlogArticleBySlug(id);
    if (!article) {
      notFound();
    }
  } catch (error) {
    fetchError = error instanceof Error ? error.message : String(error);
  }

  const bodyHtml = article?.bodyHtml ?? "";
  const hasBody = Boolean(bodyHtml.trim());
  const fallbackSummary = article?.summary;

  return (
    <section
      id="analisar"
      className="relative border-b overflow-hidden bg-stripes"
    >
      <div className="flex flex-1 border-x w-full h-full mx-auto max-w-xs md:max-w-6xl bg-background px-4 sm:px-6 lg:px-8 flex-col gap-6 py-6">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-muted-foreground"
          >
            ← Back to home
          </Link>
          {fetchError && (
            <div className="rounded-2xl border border-border bg-muted/30 p-4 text-sm text-red-400">
              {fetchError}
            </div>
          )}
          <h1 className="text-3xl font-bold">
            {article?.title ?? "Untitled Article"}
          </h1>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {article?.publishedAt ?? ""}
          </span>
        </div>
        {hasBody ? (
          <article
            className="prose max-w-none text-muted-foreground prose-a:text-primary prose-a:underline-offset-4 prose-a:hover:underline prose-ul:list-disc"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        ) : fallbackSummary ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {fallbackSummary}
          </p>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            Article content is being prepared. Please check back later.
          </p>
        )}
      </div>
    </section>
  );
}
