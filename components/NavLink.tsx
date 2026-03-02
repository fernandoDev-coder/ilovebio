"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  exact = false,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & { exact?: boolean }) {
  const pathname = usePathname();
  const hrefString = String(href);
  const isActive = exact ? pathname === hrefString : pathname?.startsWith(hrefString);

  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium text-ink-800 transition-colors duration-200 ease-out hover:bg-ink-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600 motion-reduce:transition-none",
        isActive && "bg-leaf-100 text-leaf-700",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
