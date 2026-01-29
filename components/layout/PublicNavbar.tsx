"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/Button";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={`text-sm font-semibold transition-colors ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function PublicNavbar() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
      <div className="sb-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black shadow-[0_12px_30px_rgba(252,127,3,0.25)]">
            SB
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold">SkillBridge</div>
            <div className="text-xs text-muted-foreground">Learn Anything</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="/tutors" label="Tutors" />
        </nav>

        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Link
                className="rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_26px_rgba(252,127,3,0.18)] hover:brightness-110"
                href="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href={
                  user.role === "student"
                    ? "/dashboard"
                    : user.role === "tutor"
                      ? "/tutor/dashboard"
                      : "/admin"
                }
                className="rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                {user.role === "student"
                  ? "Student Dashboard"
                  : user.role === "tutor"
                    ? "Tutor Dashboard"
                    : "Admin"}
              </Link>
              <Button variant="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

