"use client";
import { ReactNode, useMemo, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

import { cn } from "@/lib/utils";

const highlightAccentTokens = [
  "keyword",
  "selector-tag",
  "literal",
  "section",
  "title",
  "name",
  "type",
  "built_in",
  "attr",
  "attribute",
  "template-tag",
  "template-variable",
  "number",
  "variable",
  "symbol",
  "bullet",
  "link",
  "selector-id",
  "selector-class",
  "meta",
] as const;

type ThemeToken = (typeof highlightAccentTokens)[number];

type SyntaxTheme = Record<string, Record<string, string | number>>;

function createBrandTheme(baseTheme: SyntaxTheme): SyntaxTheme {
  const themed: SyntaxTheme = {
    ...baseTheme,
    hljs: {
      ...(baseTheme.hljs ?? {}),
      background: "transparent",
      color: "var(--foreground)",
    },
  };

  highlightAccentTokens.forEach((token: ThemeToken) => {
    themed[token] = {
      ...(baseTheme[token] ?? {}),
      color: "var(--primary)",
    };
  });

  return themed;
}

const brandDarkTheme = createBrandTheme(atomOneDark as SyntaxTheme);
const brandLightTheme = createBrandTheme(atomOneLight as SyntaxTheme);

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);

type SupportedLanguage = "typescript" | "tsx" | "css" | "json" | "javascript";

interface CodeComparisonPage {
  name: string;
  icon: ReactNode;
  code: string;
  language?: SupportedLanguage;
}

interface CodeComparison2Props {
  className?: string;
  pages: CodeComparisonPage[];
}

function inferLanguage(name: string): SupportedLanguage {
  if (name.endsWith(".css")) return "css";
  if (name.endsWith(".json")) return "json";
  if (name.endsWith(".tsx")) return "tsx";
  if (name.endsWith(".ts")) return "typescript";
  return "javascript";
}

const sharedHighlighterProps = {
  customStyle: {
    background: "transparent",
    padding: 0,
    margin: 0,
    textAlign: "left" as const,
    fontSize: "0.75rem",
    lineHeight: 1.7,
    // Prefer the user's VSCode editor font via a CSS variable; fall back to common mono fonts
    fontFamily:
      "var(--vscode-editor-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, 'Fira Code', 'Roboto Mono', 'Segoe UI Mono', monospace)",
    whiteSpace: "pre",
  },
  showLineNumbers: true,
  lineNumberStyle: { color: "rgb(100 116 139 / 0.6)" },
};

export function CodeComparison2({ className, pages }: CodeComparison2Props) {
  const primaryPages = pages.slice(0, 2);
  const extraPages = pages.slice(2);
  const [activeIndex, setActiveIndex] = useState(0);

  const clampedActiveIndex = useMemo(() => {
    if (primaryPages.length === 0) return 0;
    return Math.min(Math.max(activeIndex, 0), primaryPages.length - 1);
  }, [activeIndex, primaryPages.length]);

  const highlightWidth = useMemo(() => {
    if (primaryPages.length === 0) return "100%";
    return `${100 / primaryPages.length}%`;
  }, [primaryPages.length]);

  return (
    <div
      data-slot="code-editor-illustration"
      className={cn("group h-full w-full overflow-hidden", className)}
    >
      <div className="relative h-full w-full">
        <div className="z-10 w-full">
          <div className="glass-3 border-border bg-muted dark:border-border/5 dark:border-t-border/15 dark:bg-accent/30 relative mx-auto flex w-full max-w-full md:max-w-[80%] md:min-w-[460px] min-h-[420px] md:min-h-[540px] flex-col gap-4 rounded-[12px] border p-4 sm:p-6">
            <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
              <div className="hidden gap-2 pl-4 lg:flex">
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full" />
              </div>
              <div className="relative flex w-full max-w-[320px]">
                {primaryPages.map((page, index) => {
                  const isActive = index === clampedActiveIndex;
                  return (
                    <button
                      key={page.name}
                      type="button"
                      className={cn(
                        "text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs transition-colors",
                        isActive && "text-foreground"
                      )}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                    >
                      <span className="text-foreground/80">{page.icon}</span>
                      <p>{page.name}</p>
                    </button>
                  );
                })}
                {primaryPages.length > 0 && (
                  <div
                    className="absolute top-0 left-0 h-full px-2 transition-all duration-500 ease-out"
                    style={{
                      width: highlightWidth,
                      left: `calc(${highlightWidth} * ${clampedActiveIndex})`,
                    }}
                  >
                    <div className="glass-4 h-full w-full rounded-md shadow-md" />
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full grow overflow-hidden">
              {primaryPages.map((page, index) => {
                const isActive = index === clampedActiveIndex;
                const translateClass = isActive
                  ? "translate-x-0 opacity-100"
                  : index < clampedActiveIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0";

                return (
                  <div
                    key={page.name}
                    className={cn(
                      "absolute top-0 left-0 w-full px-4 sm:px-6 md:px-4 transition-all duration-700 ease-in-out",
                      translateClass
                    )}
                  >
                    <div className="overflow-auto max-h-[360px] sm:max-h-[480px] md:max-h-[540px]">
                      <SyntaxHighlighter
                        {...sharedHighlighterProps}
                        language={page.language ?? inferLanguage(page.name)}
                        style={brandDarkTheme}
                      >
                        {page.code.trim()}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
            </div>
            {extraPages.length > 0 && (
              <div className="mx-4 sm:mx-6 md:mx-8 mb-6 space-y-6">
                {extraPages.map((page) => (
                  <div
                    key={page.name}
                    className="border-border/50 glass-4 rounded-xl border bg-background/60 p-4"
                  >
                    <div className="text-muted-foreground mb-3 flex items-center gap-2 text-xs font-medium">
                      <span className="text-foreground/80">{page.icon}</span>
                      <p>{page.name}</p>
                    </div>
                    <div className="overflow-auto max-h-[280px]">
                      <SyntaxHighlighter
                        {...sharedHighlighterProps}
                        language={page.language ?? inferLanguage(page.name)}
                        style={brandLightTheme}
                      >
                        {page.code.trim()}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
