import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { tutors } from "@/lib/mockData";

export default function StudentTutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === params.id);
  if (!tutor) return notFound();

  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xs text-muted-foreground">
          <Link className="hover:text-foreground" href="/dashboard">
            Dashboard
          </Link>{" "}
          / <span className="text-foreground">Tutor profile</span>
        </div>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="truncate text-2xl font-black">{tutor.name}</div>
            <div className="mt-1 truncate text-sm text-muted-foreground">{tutor.headline}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tutor.subjects.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">{tutor.location}</div>
          </div>
          <div className="shrink-0 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-right">
            <div className="text-sm font-black">${tutor.pricePerHour}/hr</div>
            <div className="text-xs text-muted-foreground">
              ⭐ {tutor.rating} ({tutor.reviewsCount})
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="grid gap-4">
          <Card>
            <div className="text-sm font-bold">About</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Student-facing tutor profile (UI-only). This can include experience, teaching style, and achievements.
            </div>
          </Card>

          <Card>
            <div className="text-sm font-bold">Reviews</div>
            <div className="mt-3 grid gap-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-border bg-muted/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Student #{i}</div>
                    <div className="text-xs text-muted-foreground">⭐ 5.0</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Clear guidance and actionable feedback. Great session.
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <aside className="sb-card sb-ring p-5">
          <div className="text-sm font-bold">Book from dashboard</div>
          <div className="mt-1 text-xs text-muted-foreground">
            UI-only. Later you’ll hook this to your booking API.
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
            <ButtonLink href="/dashboard/bookings" className="h-11 justify-center">
              Confirm booking (mock)
            </ButtonLink>
            <Link href={`/tutors/${tutor.id}`} className="text-xs font-semibold text-primary hover:brightness-110">
              View public profile →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

