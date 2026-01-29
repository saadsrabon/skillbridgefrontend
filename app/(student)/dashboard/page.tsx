import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BarChart, DonutChart, Sparkline } from "@/components/ui/Charts";
import { analytics, studentBookings } from "@/lib/mockData";

export default function StudentDashboardPage() {
  const upcoming = studentBookings.filter((b) => b.status === "Upcoming");
  const completed = studentBookings.filter((b) => b.status === "Completed");
  const total = studentBookings.length;

  return (
    <div className="grid gap-6">
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xl font-black">Dashboard</div>
            <div className="text-sm text-muted-foreground">Your upcoming sessions and recent activity.</div>
          </div>
          <Link className="text-sm font-semibold text-primary hover:brightness-110" href="/tutors">
            Browse tutors →
          </Link>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-4">
        <Card className="lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-bold">Bookings trend</div>
              <div className="mt-1 text-xs text-muted-foreground">Last 8 weeks</div>
              <div className="mt-3 text-2xl font-black">{total}</div>
              <div className="text-xs text-muted-foreground">total bookings</div>
            </div>
            <div className="rounded-2xl border border-border bg-muted/60 p-3">
              <Sparkline values={analytics.student.bookingsLast8Weeks} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-sm font-bold">Upcoming</div>
          <div className="mt-3 text-2xl font-black">{upcoming.length}</div>
          <div className="text-xs text-muted-foreground">sessions scheduled</div>
        </Card>

        <Card>
          <div className="text-sm font-bold">Reviews</div>
          <div className="mt-3 text-2xl font-black">{analytics.student.reviewStars.reduce((a, x) => a + x.value, 0)}</div>
          <div className="text-xs text-muted-foreground">submitted</div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">Bookings by address</div>
              <div className="text-xs text-muted-foreground">Where your sessions happen</div>
            </div>
            <div className="text-xs font-semibold text-muted-foreground">UI-only</div>
          </div>
          <div className="mt-4">
            <BarChart data={analytics.student.addresses} />
          </div>
        </Card>

        <Card>
          <div className="text-sm font-bold">Review distribution</div>
          <div className="mt-4">
            <DonutChart
              segments={analytics.student.reviewStars.map((s, i) => ({
                ...s,
                color:
                  i === 0
                    ? "rgba(252,127,3,0.95)"
                    : i === 1
                      ? "rgba(252,127,3,0.55)"
                      : "rgba(255,255,255,0.18)",
              }))}
              size={120}
              thickness={14}
            />
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="text-sm font-bold">Upcoming</div>
          <div className="mt-3 grid gap-2">
            {upcoming.map((b) => (
              <div key={b.id} className="rounded-2xl border border-border bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{b.subject}</div>
                  <Badge className="bg-primary/10 text-primary border-primary/30">{b.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{b.tutorName}</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {b.date} • {b.time}
                </div>
              </div>
            ))}
            {upcoming.length === 0 && <div className="text-sm text-muted-foreground">No upcoming bookings.</div>}
          </div>
        </Card>

        <Card>
          <div className="text-sm font-bold">Completed</div>
          <div className="mt-3 grid gap-2">
            {completed.map((b) => (
              <div key={b.id} className="rounded-2xl border border-border bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{b.subject}</div>
                  <Badge>{b.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{b.tutorName}</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {b.date} • {b.time}
                </div>
                <div className="mt-3 text-xs font-semibold text-primary">Leave a review →</div>
              </div>
            ))}
            {completed.length === 0 && <div className="text-sm text-muted-foreground">No completed sessions yet.</div>}
          </div>
        </Card>
      </div>
    </div>
  );
}

