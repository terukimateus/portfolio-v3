"use client";

import Image from "next/image";
import { Fragment } from "react";

import { useI18n } from "@/providers/i18n-provider";

function calculateDuration(
  start: string,
  end: string | null,
  unitLabels: { year: string[]; month: string[] }
): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr =
    years > 0
      ? `${years} ${years === 1 ? unitLabels.year[0] : unitLabels.year[1]}`
      : "";
  const monthStr =
    months > 0
      ? `${months} ${months === 1 ? unitLabels.month[0] : unitLabels.month[1]}`
      : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

function formatMonthYear(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function Experiences() {
  const { dictionary, language, t } = useI18n();
  const experiences = dictionary.experiences.items;
  const unitLabels = dictionary.experiences.duration;
  const locale = language === "pt-br" ? "pt-BR" : "en-US";

  return (
    <section
      id="experience"
      className="relative border-b overflow-hidden bg-stripes"
    >
      <div className="bg-background border-b w-full">
        <div className="flex flex-col mx-auto border-x max-w-xs md:max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-3xl font-semibold">{t("experiences.title")}</h2>
          <p className="text-sm text-muted">{t("experiences.subtitle")}</p>
        </div>
      </div>
      <div className="flex flex-1 border-x w-full h-full mx-auto max-w-xs md:max-w-6xl bg-background px-4 sm:px-6 lg:px-8 flex-col gap-6">
        <div className="flex w-full flex-col gap-4">
          {experiences.map((experience, index) => (
            <Fragment key={`experience-${index}`}>
              <article className="flex flex-col p-5 gap-4 rounded-3xl">
                <div className="flex items-center gap-4">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={128}
                    height={64}
                    className="h-12 w-24 object-contain"
                  />
                  <div>
                    <div className="text-base font-semibold">
                      {experience.company}
                    </div>
                    <div className="flex gap-3 text-xs uppercase text-muted-foreground">
                      {`${formatMonthYear(experience.start, locale)} - ${
                        experience.end
                          ? formatMonthYear(experience.end, locale)
                          : t("experiences.present")
                      } • ${calculateDuration(
                        experience.start,
                        experience.end,
                        unitLabels
                      )}`}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold">
                    {experience.role}
                  </span>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {experience.description.map((item) => (
                    <li key={`${experience.company}-${item}`}>• {item}</li>
                  ))}
                </ul>
              </article>
              {index < experiences.length - 1 && (
                <div
                  className="self-start mx-5 h-8 w-px bg-muted-foreground/50"
                  aria-hidden
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
