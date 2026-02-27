import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft",
        className
      )}
      {...props}
    />
  );
}

