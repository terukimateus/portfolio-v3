type CardPropsType = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

import { cn } from "@/lib/utils";

export const Card = ({ children, className, ...props }: CardPropsType) => {
  return (
    <div
      className={cn(
        "flex flex-col glass-2  p-6 items-center gap-2 overflow-hidden rounded-xl",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        className
      )}
      {...props}
    >
      {/* on hover light effect */}
      <div className="opacity-0 hover:opacity-100 duration-700 absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-linear-to-br from-primary/50 via-primary/10 to-transparent blur-3xl" />
      {children}
    </div>
  );
};

export default Card;
