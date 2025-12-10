"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import AnimatedBeamIcons from "@/components/AnimatedBeanIcons";
import {
  Gauge,
  Globe,
  MegaphoneOff,
  MousePointerClick,
  Shield,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row  text-primary items-center justify-between">
          <Circle ref={div1Ref}>
            <Sparkles />
          </Circle>
          <Circle ref={div5Ref}>
            <Gauge />
          </Circle>
        </div>
        <div className="flex flex-row  text-primary items-center justify-between">
          <Circle ref={div2Ref}>
            <ShieldCheck />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Image
              src="/icon.png"
              alt="Shift Studio"
              width={80}
              height={80}
              className="h-16 w-16 object-contain filter brightness-0"
            />
          </Circle>
          <Circle ref={div6Ref}>
            <MousePointerClick />
          </Circle>
        </div>
        <div className="flex flex-row text-primary items-center justify-between">
          <Circle ref={div3Ref}>
            <MegaphoneOff />
          </Circle>
          <Circle ref={div7Ref}>
            <Globe />
          </Circle>
        </div>
      </div>

      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeamIcons
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
