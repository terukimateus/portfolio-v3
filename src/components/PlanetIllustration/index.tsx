export default function PlannetIllustration() {
  return (
    <div
      data-slot="rising-large-illustration"
      className="group relative w-full pt-[50%]"
    >
      <div
        className="bg-background/50 absolute top-0 left-0 z-10 w-full overflow-hidden rounded-[100%] border-4 pt-[100%]"
        style={{
          borderColor: "var(--primary)",
          boxShadow:
            "0px 0px 12px var(--primary), 0px 0px 64px var(--primary-foreground), 0px 0px 12px var(--primary) inset",
        }}
      >
        {/* soft inner tint using primary-foreground */}
        <div
          className="absolute top-0 left-0 h-full w-full rounded-[100%]"
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--primary-foreground) 40%, transparent)",
            WebkitMaskImage:
              "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
            maskImage:
              "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
          }}
        />

        {/* moving layer with primary color */}
        <div
          className="absolute top-0 left-0 h-full w-full rounded-[100%] animate-install-rise"
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--primary) 60%, transparent)",
            WebkitMaskImage:
              "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
            maskImage:
              "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
          }}
        />

        {/* stronger primary layer (adapts to dark via existing dark:bg-white) */}
        <div
          className="absolute top-0 left-0 h-full w-full rounded-[100%] animate-install-rise dark:bg-white"
          style={{
            backgroundColor: "var(--primary)",
            WebkitMaskImage:
              "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)",
            maskImage:
              "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)",
            animationDelay: "1.5s",
          }}
        />
      </div>
      <div data-slot="glow" className="absolute w-full top-[50%]">
        <div
          className="absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] opacity-20 sm:h-[512px] dark:opacity-100 -translate-y-1/2 animate-install-glow"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary-foreground) 60%, transparent) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-200 rounded-[50%] opacity-20 sm:h-64 dark:opacity-100 -translate-y-1/2 animate-install-glow"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 50%, transparent) 0%, transparent 60%)",
            animationDelay: "0.8s",
          }}
        />
      </div>
    </div>
  );
}
