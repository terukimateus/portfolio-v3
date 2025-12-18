import { LucideBook } from "lucide-react";
import type { ComponentType } from "react";

const NODE_POSITIONS = [
  { top: "42%", left: "10%" },
  { top: "31%", left: "24%" },
  { top: "79%", left: "39%" },
  { top: "24%", left: "75%" },
  { top: "57%", left: "95%" },
  { top: "80%", left: "81%" },
];

interface NetworkIllustrationProps {
  icon?: ComponentType<{ className?: string }>;
}

export default function NetworkIllustration({
  icon: Icon = LucideBook,
}: NetworkIllustrationProps) {
  return (
    <div
      data-slot="network-illustration"
      className="group relative flex aspect-video w-full items-center justify-center"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -inset-10 blur-[120px] opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, color-mix(in oklch, var(--primary) 65%, transparent) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 80%, color-mix(in oklch, var(--primary) 35%, transparent) 0%, transparent 60%)",
          }}
        />
      </div>

      <div
        aria-hidden
        className="text-muted-foreground/40 relative z-10 h-full w-full"
        style={{
          color: "color-mix(in oklch, var(--muted-foreground) 65%, white)",
        }}
      >
        <svg
          width="512"
          height="256"
          viewBox="0 0 512 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fade-top relative h-full! w-full!"
        >
          <path
            d="M254.884 128.439L386 53M254.884 128.439L201.555 210.908M254.884 128.439L122.687 71.6579M254.884 128.439L194.795 -24.3298M254.884 128.439L414 215M254.884 128.439L487.682 146.015M386 53L194.795 -24.3298M386 53L487.682 146.015M386 53L454.633 -18.922M201.555 210.908L414 215M201.555 210.908L122.687 71.6579M201.555 210.908L52.5 103.5M201.555 210.908L144 289.771M201.555 210.908H-49.9724M414 215L487.682 146.015M414 215L144 289.771M414 215L323.187 365.479M414 215L563.434 333.082M122.687 71.6579L52.5 103.5M122.687 71.6579L194.795 -24.3298M194.795 -24.3298L52.5 103.5M194.795 -24.3298L454.633 -18.922M194.795 -24.3298H-9.50954L52.5 103.5M52.5 103.5L-49.9724 210.908M487.682 146.015L614.552 365.479M487.682 146.015L679.2 188.425L454.633 -18.922M144 289.771L-49.9724 210.908"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="bg-background/5 z-20 absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
        <div
          className="glass-5 relative z-10 rounded-full p-3 shadow"
          style={{
            background:
              "linear-gradient(140deg, color-mix(in oklch, var(--primary) 25%, var(--primary)) 0%, color-mix(in oklch, var(--primary) 90%, var(--primary) 15%) 100%)",
            boxShadow:
              "0 12px 80px color-mix(in oklch, var(--primary) 45%, transparent)",
          }}
        >
          <div data-slot="beam" className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 scale-[2] rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 55%, transparent) 0%, transparent 65%)",
              }}
            />
            <Icon className="relative z-10 size-10 text-black drop-shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
          </div>
        </div>
      </div>

      {NODE_POSITIONS.map(({ top, left }, index) => (
        <div
          key={`${top}-${left}-${index}`}
          aria-hidden
          className="glass-4 bg-background ring-background/50 absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            top,
            left,
            width: "18px",
            height: "18px",
            background:
              "radial-gradient(circle, color-mix(in oklch, white 60%, var(--primary-foreground) 30%) 0%, color-mix(in oklch, var(--muted-foreground) 35%, transparent) 65%)",
            boxShadow:
              "0 0 25px color-mix(in oklch, var(--primary) 40%, transparent)",
            color: "color-mix(in oklch, var(--primary) 50%, white)",
          }}
        />
      ))}

      <div
        data-slot="glow"
        className="pointer-events-none absolute top-[50%] z-10 w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      >
        <div
          className="absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] sm:h-[512px] dark:opacity-100 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 55%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-200 rounded-[50%] sm:h-64 dark:opacity-100 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 35%, transparent) 0%, transparent 65%)",
          }}
        />
      </div>
    </div>
  );
}
