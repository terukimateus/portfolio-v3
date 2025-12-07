"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type AnimatedStatValueProps = {
  value: number;
  active: boolean;
};

function AnimatedStatValue({ value, active }: AnimatedStatValueProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  const decimals = Number.isInteger(value)
    ? 0
    : Math.min(3, value.toString().split(".")[1]?.length ?? 1);

  useEffect(() => {
    if (!active) return;

    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [active, value]);

  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const formattedValue = formatter.format(
    decimals > 0 ? displayValue : Math.floor(displayValue)
  );

  return <span>{formattedValue}</span>;
}

export default function Stats({
  items = [
    {
      label: "mais de",
      value: 1.5,
      suffix: "k",
      description: "downloads no npm",
    },
    {
      label: "menos",
      value: 90,
      suffix: "%",
      description: "linhas de código",
    },
    {
      label: "mais de",
      value: 10,
      suffix: "+",
      description: "documentos brasileiros",
    },
    {
      label: "open-source",
      value: 100,
      suffix: "%",
      description: "projeto gratuito",
    },
  ],
  className,
}: StatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="container mx-auto max-w-[960px]">
      {items !== false && items.length > 0 && (
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center gap-3 lg:text-left"
            >
              {item.label && (
                <div className="text-muted-foreground text-sm font-semibold">
                  {item.label}
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <div className="font-bold from-foreground to-primary dark:to-brand bg-linear-to-r bg-clip-text text-4xl text-transparent drop-shadow-[2px_1px_24px_var(--primary)] transition-all duration-300 sm:text-5xl md:text-6xl">
                  {typeof item.value === "number" ? (
                    <AnimatedStatValue
                      value={item.value}
                      active={hasAnimated}
                    />
                  ) : (
                    item.value
                  )}
                </div>
                {item.suffix && (
                  <div className="text-brand text-2xl font-semibold">
                    {item.suffix}
                  </div>
                )}
              </div>
              {item.description && (
                <div className="text-muted-foreground text-sm font-semibold text-pretty">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
