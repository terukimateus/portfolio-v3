"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const logoGroups = [
  {
    id: "langchain",
    logos: [
      {
        src: "/langchain-color.svg",
        alt: "Langchain Color Logo",
        width: 48,
        height: 48,
      },
      {
        src: "/langchain-text.svg",
        alt: "Langchain Text Logo",
        width: 86,
        height: 86,
      },
    ],
  },
  {
    id: "chroma",
    logos: [
      { src: "/chroma-logo.svg", alt: "Chroma Logo", width: 128, height: 128 },
    ],
  },
  {
    id: "python",
    logos: [
      { src: "/python-logo.svg", alt: "Python Logo", width: 128, height: 128 },
    ],
  },
  {
    id: "react",
    logos: [
      { src: "/react-logo.svg", alt: "React Logo", width: 128, height: 128 },
    ],
  },
  {
    id: "mysql",
    logos: [
      { src: "/mysql-icon.svg", alt: "MySQL Logo", width: 86, height: 86 },
    ],
  },
  {
    id: "docker",
    borderR: false,
    logos: [
      { src: "/Docker_Logo.svg", alt: "Docker Logo", width: 128, height: 128 },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative hidden border-b overflow-hidden bg-stripes md:block md:h-42"
    >
      <div className="mx-auto flex h-full w-full bg-background">
        <div className="h-full w-full flex-1 flex gap-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logoGroups.map((group) => (
            <div
              key={group.id}
              className={cn(
                "h-24 md:h-auto display-none hidden md:flex w-full overflow-hidden items-center justify-center border-y md:border-y-0 border-r border-border gap-2",
                `${group.borderR === false ? "border-0" : ""}`
              )}
            >
              {group.logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
