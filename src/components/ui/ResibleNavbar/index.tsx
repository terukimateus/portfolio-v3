import useScreen from "@/hooks/useScreen";
import { cn } from "@/lib/utils";
import { LucideMenu, LucideX } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div ref={ref} className={cn(" inset-x-0 top-5 z-50", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      className={cn(
        " z-50 mx-auto hidden w-full flex-row items-center justify-between self-start border-b bg-background/60 px-5 py-4 lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className }: NavItemsProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { handleScroll } = useScreen();

  const setActive = useCallback(() => {
    setActiveSection(handleScroll());
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", setActive);
    return () => {
      window.removeEventListener("scroll", setActive);
    };
  }, [setActive]);

  const onClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(section);
    if (!element) return;

    setActiveSection(section);
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={cn(
        " inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-muted-foreground transition duration-200 lg:flex lg:space-x-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onClick={(event) => {
            onClick(event, item.link);
          }}
          className="relative rounded-full px-3 py-2 text-foreground/80 hover:text-foreground"
          key={`link-${idx}`}
          href={`#${item.link}`}
        >
          {activeSection === item.link && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              layoutId="navbar-active"
              className="absolute inset-0 h-full w-full rounded-full bg-primary/10"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      className={cn(
        " z-50 mx-auto flex w-full flex-col border-b items-center justify-between bg-background/80 px-3 py-3 lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-100 flex w-full flex-col items-start justify-start gap-4  border border-border/70 bg-background px-4 py-6 ",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <LucideX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <LucideMenu className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#top"
      className="relative z-20 mr-3 flex items-center space-x-3 rounded-full px-2 py-1 text-sm font-semibold text-foreground"
    >
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold text-foreground">
          Matchly.ai
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          Currículos prontos para ATS
        </span>
      </div>
    </a>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & React.ComponentPropsWithoutRef<"a">) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-sm font-semibold relative cursor-pointer transition duration-200 inline-flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-primary text-[var(--background)] shadow-[0_10px_30px_rgba(37,99,235,0.35)] border border-primary/40 hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-foreground border border-border/60 hover:bg-foreground/5",
    dark: "bg-foreground text-[var(--background)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-foreground/30",
    gradient:
      "bg-gradient-to-r from-primary to-accent text-[var(--background)] shadow-[0_10px_30px_rgba(37,99,235,0.35)]",
  };

  return (
    <a
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};
