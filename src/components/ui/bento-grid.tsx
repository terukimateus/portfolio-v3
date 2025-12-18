import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>

    {/* filler so content stays at bottom */}
    <div className="flex-1" />

    {/* bottom panel: gradient background + icon/title/description + CTA (static, no hover reveal) */}
    <div className="relative w-full p-4">
      {/* gradient that brightens the bottom area for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 rounded-b-xl bg-linear-to-t from-white via-white/70 to-transparent dark:from-slate-900/90 dark:via-slate-900/60" />

      <div className="relative z-20 flex w-full flex-col gap-2">
        <div className="flex items-center gap-3">
          <Icon className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        </div>

        <p className="max-w-lg text-sm text-muted-foreground">{description}</p>

        {cta && href ? (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/70 text-primary backdrop-blur hover:border-primary/40 hover:bg-primary/5"
          >
            <a href={href}>
              <span>{cta}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        ) : null}
      </div>
    </div>

    {/* subtle overlay to soften imagery in light mode */}
    <div className="pointer-events-none absolute inset-0 bg-white/30 dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
