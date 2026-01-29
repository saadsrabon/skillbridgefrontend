"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/Button";

type Item = { href: string; label: string };

function SideLink({ href, label }: Item) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
        active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function DashboardShell({
  title,
  items,
  children,
}: {
  title: string;
  items: Item[];
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-dvh">
      <header className="border-b border-border bg-background/70 backdrop-blur">
        <div className="sb-container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-extrabold">
              SkillBridge
            </Link>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden text-sm text-muted-foreground sm:block">
              {user?.name} • {user?.role}
            </div>
            <Button variant="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="sb-container grid gap-6 py-6 md:grid-cols-[240px_1fr]">
        <aside className="sb-card p-3">
          <div className="mb-2 px-3 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Menu
          </div>
          <nav className="flex flex-col gap-1">
            {items.map((it) => (
              <SideLink key={it.href} href={it.href} label={it.label} />
            ))}
          </nav>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}

