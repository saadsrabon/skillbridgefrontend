"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function TutorProfilePage() {
  const { user } = useAuth();
  return (
    <div className="grid gap-6">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xl font-black">Tutor Profile</div>
            <div className="text-sm text-muted-foreground">Update your public tutor info (UI-only).</div>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/30">Public</Badge>
        </div>
      </Card>

      <Card>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Display name</div>
            <Input defaultValue={user?.name ?? ""} />
          </label>
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Hourly rate</div>
            <Input defaultValue="25" />
          </label>
          <label className="grid gap-1 sm:col-span-2">
            <div className="text-xs font-bold text-muted-foreground">Headline</div>
            <Input defaultValue="Full‑Stack Mentor • React/Next.js • Interview Prep" />
          </label>
          <label className="grid gap-1 sm:col-span-2">
            <div className="text-xs font-bold text-muted-foreground">Subjects</div>
            <Input defaultValue="React, Next.js, TypeScript" />
          </label>
          <label className="grid gap-1 sm:col-span-2">
            <div className="text-xs font-bold text-muted-foreground">Bio</div>
            <textarea
              className="min-h-32 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              defaultValue="UI-only placeholder bio. Replace with real content later."
            />
          </label>
        </div>
      </Card>
    </div>
  );
}

