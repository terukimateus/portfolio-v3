type MagicButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MagicButton: React.FC<MagicButtonProps> = ({
  children,
  onClick,
  style,
  href,
  target,
  rel,
  ...props
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="relative inline-flex h-9 overflow-hidden rounded-md p-[1px]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary-foreground)_0%,var(--color-primary)_50%,var(--color-primary-foreground)_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </a>
  );
};
