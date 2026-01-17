"use client";

import { Fragment } from "react";

import { useI18n } from "@/providers/i18n-provider";

export function Projects() {
  const { dictionary, t } = useI18n();
  const projects = dictionary.projects.items;

  return (
    <section
      id="projects"
      className="relative border-b overflow-hidden bg-stripes"
    >
      <div className="bg-background border-b w-full ">
        <div className="flex flex-col mx-auto border-x max-w-xs md:max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-3xl font-semibold">{t("projects.title")}</h2>
          <p className="text-sm text-muted">{t("projects.subtitle")}</p>
        </div>
      </div>
      <div className="flex flex-1 border-x w-full h-full mx-auto max-w-xs md:max-w-6xl bg-background px-4 sm:px-6 lg:px-8 flex-col gap-6 py-6">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Fragment key={`project-${index}`}>
              <article className="flex h-full flex-col gap-4 border-border bg-background p-5 transition">
                <header className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <span className="text-xs uppercase text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={`${project.name}-${item}`}
                        className="text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </header>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={`${project.name}-${highlight}`}>• {highlight}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 text-sm">
                  {project.links.page && (
                    <a
                      className="border-b border-transparent text-foreground/80 transition hover:border-foreground/60 hover:text-foreground"
                      href={project.links.page}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("projects.links.website")}
                    </a>
                  )}
                  {project.links.npm && (
                    <a
                      className="border-b border-transparent text-foreground/80 transition hover:border-foreground/60 hover:text-foreground"
                      href={project.links.npm}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("projects.links.npm")}
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      className="border-b border-transparent text-foreground/80 transition hover:border-foreground/60 hover:text-foreground"
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("projects.links.repo")}
                    </a>
                  )}
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
