import { cn } from "@/lib/utils";
import Link from "next/link";
import { getBlogPosts } from "@/lib/notion";
import { cookies } from "next/headers";

import en from "@/i18n/en.json";
import ptBr from "@/i18n/pt-br.json";

const dictionaries = {
  en,
  "pt-br": ptBr,
} as const;

async function getDictionary() {
  const stored = (await cookies()).get("portfolio-language")?.value;
  if (stored && stored in dictionaries) {
    return dictionaries[stored as keyof typeof dictionaries];
  }
  return dictionaries.en;
}

export async function Blog() {
  const dictionary = await getDictionary();
  const posts = await getBlogPosts();

  const max3postsorderedbydate = posts
    .sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <section id="blog" className="relative border-b overflow-hidden bg-stripes">
      <div className="bg-background border-b w-full">
        <div className="flex flex-col mx-auto border-x max-w-xs md:max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-3xl font-semibold">{dictionary.blog.title}</h2>
          <p className="text-sm text-muted">{dictionary.blog.subtitle}</p>
        </div>
      </div>
      <div className="flex flex-1 border-x w-full h-full mx-auto max-w-xs md:max-w-6xl bg-background flex-col gap-6">
        <div className="flex w-full flex-col">
          {max3postsorderedbydate.length === 0 ? (
            <p className="px-5 py-8 text-sm text-muted-foreground">
              {dictionary.blog.empty}
            </p>
          ) : (
            max3postsorderedbydate.map((post: any, idx: number) => (
              <article
                key={post.id}
                className={cn(
                  "flex flex-col p-5 gap-4",
                  `${idx < posts.length - 1 ? "border-b border-border" : ""}`
                )}
              >
                <div className="flex items-start flex-wrap justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {post.publishedAt ?? dictionary.blog.dateUnavailable}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.summary || dictionary.blog.summaryUnavailable}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                >
                  {dictionary.blog.readMore}
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
