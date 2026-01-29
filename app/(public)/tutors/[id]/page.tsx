import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { tutors } from "@/lib/mockData";

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === params.id);
  if (!tutor) return notFound();

  return (
    <div className="sb-container py-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">
            <Link className="hover:text-foreground" href="/tutors">
              Tutors
            </Link>{" "}
            / <span className="text-foreground">{tutor.name}</span>
          </div>
          <div className="mt-2 truncate text-3xl font-black">{tutor.name}</div>
          <div className="mt-1 truncate text-sm text-muted-foreground">{tutor.headline}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tutor.subjects.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="rounded-2xl border border-border bg-muted px-4 py-3 text-right">
            <div className="text-sm font-black">${tutor.pricePerHour}/hr</div>
            <div className="text-xs text-muted-foreground">
              ⭐ {tutor.rating} ({tutor.reviewsCount})
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="grid gap-4">
          <Card>
            <div className="text-sm font-bold">About</div>
            <p className="mt-2 text-sm text-muted-foreground">
              UI-only placeholder bio. This tutor helps learners reach their goals with a structured plan, practice,
              and feedback. Replace with real profile content later.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-bold">Reviews</div>
            <div className="mt-2 grid gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-border bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Student #{i}</div>
                    <div className="text-xs text-muted-foreground">⭐ 5.0</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Super clear explanations and great pacing. Would book again.
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <aside className="sb-card p-5">
          <div className="text-sm font-bold">Book a session</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Protected action (UI-only). You’ll be redirected to login if not authenticated.
          </div>

          <div className="mt-4 grid gap-3">
            <label className="grid gap-1">
              <div className="text-xs font-bold text-muted-foreground">Date</div>
              <input
                className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                type="date"
              />
            </label>
            <label className="grid gap-1">
              <div className="text-xs font-bold text-muted-foreground">Time</div>
              <select className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
              </select>
            </label>
            <ButtonLink href="/dashboard" className="h-11 justify-center">
              Continue to booking (Student)
            </ButtonLink>
            <div className="text-xs text-muted-foreground">
              Not a student? Try logging in as tutor/admin; you’ll be redirected away from student routes.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

