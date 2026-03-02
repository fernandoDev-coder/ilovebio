import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-leaf-600 text-white hover:bg-leaf-700 focus-visible:outline-leaf-600",
  secondary:
    "bg-white text-ink-900 ring-1 ring-ink-900/10 hover:bg-sand-50 focus-visible:outline-ink-900",
  ghost:
    "bg-transparent text-ink-900 hover:bg-ink-900/5 focus-visible:outline-ink-900"
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-[transform,background-color,color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:shadow-none motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
