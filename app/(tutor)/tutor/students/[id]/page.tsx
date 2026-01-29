import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { students } from "@/lib/mockData";

export default function TutorStudentProfilePage({ params }: { params: { id: string } }) {
  const student = students.find((s) => s.id === params.id);
  if (!student) return notFound();

  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xs text-muted-foreground">
          <Link className="hover:text-foreground" href="/tutor/dashboard">
            Tutor Dashboard
          </Link>{" "}
          / <span className="text-foreground">Student profile</span>
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="truncate text-2xl font-black">{student.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{student.email}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/30">{student.level}</Badge>
              {student.interests.map((i) => (
                <Badge key={i}>{i}</Badge>
              ))}
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-border bg-muted/60 px-4 py-3">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Goal</div>
            <div className="mt-1 text-sm font-semibold">{student.goal}</div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-sm font-bold">Session notes</div>
        <div className="mt-2 text-sm text-muted-foreground">
          Tutor-facing student profile (UI-only). You can store notes, progress, and objectives after each session.
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-muted/60 p-4">
          <div className="text-xs font-bold text-muted-foreground">Private notes</div>
          <textarea
            className="mt-2 min-h-32 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            placeholder="Write notes here (UI-only)..."
          />
        </div>
      </Card>
    </div>
  );
}

