"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import type { AuthUser, UserRole } from "@/components/auth/authTypes";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";

const demoUsers: AuthUser[] = [
  { id: "demo-student", name: "Demo Student", email: "student@demo.com", role: "student" },
  { id: "demo-tutor", name: "Demo Tutor", email: "tutor@demo.com", role: "tutor" },
  { id: "demo-admin", name: "Demo Admin", email: "admin@demo.com", role: "admin" },
];

function roleHome(role: UserRole) {
  if (role === "student") return "/dashboard";
  if (role === "tutor") return "/tutor/dashboard";
  return "/admin";
}

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const next = searchParams.get("next");
  const nextPath = useMemo(() => (next && next.startsWith("/") ? next : null), [next]);

  const [email, setEmail] = useState("student@demo.com");
  const [role, setRole] = useState<UserRole>("student");

  const onLogin = () => {
    const match = demoUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role);
    const user =
      match ??
      ({
        id: crypto.randomUUID(),
        name: "User",
        email,
        role,
      } satisfies AuthUser);

    login(user);
    router.replace(nextPath ?? roleHome(user.role));
  };

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000",
  });
};
  return (
    <div className="sb-container py-10">
      <div className="mx-auto max-w-md sb-card p-6">
        <div className="text-xl font-black">Login</div>
        <div className="mt-1 text-sm text-muted-foreground">UI-only auth. Choose a demo role or type any email.</div>

        <div className="mt-6 grid gap-3">
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Email</div>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>

          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Role</div>
            <select
              className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <Button onClick={onLogin} className="h-11">
            Continue
          </Button>

          <div className="text-xs text-muted-foreground">
            New here?{" "}
            <Link className="font-semibold text-primary hover:brightness-110" href="/register">
              Create an account
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Quick login</div>
          {/* <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {demoUsers.map((u) => (
              <button
                key={u.id}
                onClick={() => {
                  login(u);
                  router.replace(nextPath ?? roleHome(u.role));
                }}
                className="rounded-xl border border-border bg-muted px-3 py-2 text-left text-xs font-semibold hover:bg-muted/70"
              >
                <div className="text-foreground">{u.role}</div>
                <div className="text-muted-foreground">{u.email}</div>
              </button>
            ))}
          </div> */}
          <Button variant="secondary" onClick={signIn} className="mt-3 w-full ">
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

