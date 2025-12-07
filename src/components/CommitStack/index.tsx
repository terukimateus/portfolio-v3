"use client";

import { useState } from "react";
import { GitBranch, CircleCheck, Rocket } from "lucide-react";

const commitsDefault = [
  {
    id: 1,
    icon: GitBranch,
    date: "Nov 30 2025 09:12 AM",
    title: "Commit inicial do projeto",
    meta: "Aline Monteiro • aline@mockdev.app",
    opacity: 0.35,
    scale: 0.72,
    mt: -70,
  },
  {
    id: 2,
    icon: CircleCheck,
    date: "Dez 02 2025 02:45 PM",
    title: "Pull request preparado para revisão",
    meta: "Diego Lima • diego@mockdev.app",
    opacity: 0.58,
    scale: 0.82,
    mt: -64,
  },
  {
    id: 3,
    icon: Rocket,
    date: "Dez 03 2025 04:10 PM",
    title: "Merge realizado e deploy automático",
    meta: "Marcela Rocha • marcela@mockdev.app",
    opacity: 0.74,
    scale: 0.92,
    mt: -56,
  },
];

type CommitsItem = {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  date: string;
  title: string;
  meta: string;
  opacity: number;
  scale: number;
  mt: number;
};

type CommitStackProps = {
  commits?: CommitsItem[];
  className?: string;
};

export function CommitStack({
  commits = commitsDefault,
  className,
}: CommitStackProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className={`flex flex-col absolute top-0 items-center ${className}`}>
      {commits.map(
        ({ id, icon: Icon, date, title, meta, opacity, scale, mt }, index) => (
          <article
            key={id}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex w-80 flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm glass-3 transition-transform duration-300 md:w-80"
            style={{
              transform: `scale(${scale}) translateY(${
                hoveredId === id ? "-42px" : "0"
              })`,
              marginTop: index === 0 ? 0 : `${mt}px`,
              zIndex:
                hoveredId === id ? commits.length + 1 : commits.length + index,
            }}
          >
            <div
              className="flex items-center gap-4 px-5 py-4 text-sm"
              style={{ opacity }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary/80">
                <Icon className="h-4 w-4 stroke-[1.6]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">{date}</span>
                <p className="text-sm font-semibold text-foreground">{title}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-border/40 px-5 py-2 text-xs text-muted-foreground/70">
              {meta}
            </div>
          </article>
        )
      )}
    </div>
  );
}
