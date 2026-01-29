"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import type { UserRole } from "@/components/auth/authTypes";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function roleHome(role: UserRole) {
  if (role === "student") return "/dashboard";
  if (role === "tutor") return "/tutor/dashboard";
  return "/admin";
}

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const next = searchParams.get("next");
  const nextPath = useMemo(() => (next && next.startsWith("/") ? next : null), [next]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("student");

  const onSubmit = () => {
    register({ name: name || "User", email: email || "user@example.com", role });
    router.replace(nextPath ?? roleHome(role));
  };

  return (
    <div className="sb-container py-10">
      <div className="mx-auto max-w-md sb-card p-6">
        <div className="text-xl font-black">Register</div>
        <div className="mt-1 text-sm text-muted-foreground">
          Pick your role during registration (UI-only). Admin accounts should be seeded in the backend later.
        </div>

        <div className="mt-6 grid gap-3">
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Full name</div>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>

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

          <Button onClick={onSubmit} className="h-11">
            Create account
          </Button>

          <div className="text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link className="font-semibold text-primary hover:brightness-110" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

