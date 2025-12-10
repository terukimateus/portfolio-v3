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
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
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
      {/* gradient that fades from black at bottom to transparent upwards */}
      <div className="absolute inset-x-0 bottom-0 h-36 rounded-b-xl bg-linear-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="relative z-20 flex w-full flex-col gap-2">
        <div className="flex items-center gap-3">
          <Icon className="h-10 w-10 text-white" />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>

        <p className="text-sm text-white/80 max-w-lg">{description}</p>
      </div>
    </div>

    {/* subtle overlay to replace previous hover-only shade (static, non-interactive) */}
    <div className="pointer-events-none absolute inset-0 bg-black/3 dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
