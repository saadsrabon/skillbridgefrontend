"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function StudentProfilePage() {
  const { user } = useAuth();

  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Profile</div>
        <div className="text-sm text-muted-foreground">Update your info (UI-only).</div>
      </Card>

      <Card>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Name</div>
            <Input defaultValue={user?.name ?? ""} />
          </label>
          <label className="grid gap-1">
            <div className="text-xs font-bold text-muted-foreground">Email</div>
            <Input defaultValue={user?.email ?? ""} />
          </label>
          <label className="grid gap-1 sm:col-span-2">
            <div className="text-xs font-bold text-muted-foreground">Bio</div>
            <textarea
              className="min-h-28 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              placeholder="Tell tutors what you’re learning..."
            />
          </label>
        </div>
      </Card>
    </div>
  );
}

