import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function TutorDashboardPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Tutor Dashboard</div>
        <div className="text-sm text-muted-foreground">Sessions, stats, and ratings (UI-only).</div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <div className="text-sm font-bold">Upcoming sessions</div>
          <div className="mt-3 text-2xl font-black">3</div>
          <div className="mt-1 text-sm text-muted-foreground">Next: Feb 2, 7:00 PM</div>
        </Card>
        <Card>
          <div className="text-sm font-bold">Rating</div>
          <div className="mt-3 text-2xl font-black">
            4.9 <span className="text-sm text-muted-foreground">/ 5</span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">128 reviews</div>
        </Card>
        <Card>
          <div className="text-sm font-bold">Status</div>
          <div className="mt-3">
            <Badge className="bg-primary/10 text-primary border-primary/30">Active</Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Visible in tutor listings</div>
        </Card>
      </div>

      <Card>
        <div className="text-sm font-bold">Teaching sessions</div>
        <div className="mt-3 grid gap-2">
          {[
            { id: "s1", studentId: "st-201", student: "Demo Student", subject: "Next.js", date: "2026-02-02", time: "7:00 PM" },
            { id: "s2", studentId: "st-202", student: "Student #2", subject: "TypeScript", date: "2026-02-05", time: "8:00 PM" },
          ].map((s) => (
            <div key={s.id} className="rounded-2xl border border-border bg-muted p-4">
              <div className="text-sm font-semibold">
                {s.subject} • {s.student}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.date} • {s.time}
              </div>
              <div className="mt-2">
                <Link
                  href={`/tutor/students/${s.studentId}`}
                  className="text-xs font-semibold text-primary hover:brightness-110"
                >
                  View student profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

