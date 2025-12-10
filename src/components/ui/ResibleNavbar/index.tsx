import useScreen from "@/hooks/useScreen";
import { cn } from "@/lib/utils";
import { LucideMenu, LucideX } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

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
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-5 z-50", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        backgroundColor: visible
          ? "rgba(2, 6, 23, 0.86)"
          : "rgba(2, 6, 23, 0.7)",
        borderColor: "rgba(229, 231, 235, 0.12)",
        paddingTop: visible ? 10 : 12,
        paddingBottom: visible ? 10 : 12,
        width: visible ? "85%" : "100%",
        y: visible ? 0 : 8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto hidden w-full max-w-6xl flex-row items-center justify-between self-start rounded-2xl border bg-background/60 px-5 py-4 lg:flex",
        "shadow-[0_12px_50px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </motion.div>
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
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-muted-foreground transition duration-200 lg:flex lg:space-x-1",
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
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        backgroundColor: visible
          ? "rgba(2, 6, 23, 0.9)"
          : "rgba(2, 6, 23, 0.75)",
        borderRadius: visible ? "12px" : "16px",
        y: visible ? 0 : 8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between border border-border/60 bg-background/80 px-3 py-3 lg:hidden",
        "shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
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
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-border/70 bg-background/95 px-4 py-6 shadow-[0_14px_45px_rgba(0,0,0,0.28)]",
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
      <Image
        src="/icon.png"
        alt="Shift Studio Logo"
        width={40}
        height={40}
      ></Image>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold text-foreground">
          Shift Studio
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          Produtos que deslocam
        </span>
      </div>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
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
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
