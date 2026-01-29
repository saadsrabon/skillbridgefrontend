import { Card } from "@/components/ui/Card";
import { BarChart, DonutChart, Sparkline } from "@/components/ui/Charts";
import { analytics } from "@/lib/mockData";

export default function AdminDashboardPage() {
  const totalUsers = analytics.admin.userSplit.reduce((a, x) => a + x.value, 0);
  const totalBookings12m = analytics.admin.bookingsLast12Months.reduce((a, x) => a + x.value, 0);

  return (
    <div className="grid gap-6">
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xl font-black">Admin Dashboard</div>
            <div className="text-sm text-muted-foreground">Platform overview, growth, and moderation (UI-only).</div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/60 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Bookings trend</div>
            <div className="mt-2">
              <Sparkline values={analytics.admin.bookingsLast12Months.map((x) => x.value)} width={160} height={40} />
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <div className="text-sm font-bold">Total users</div>
          <div className="mt-3 text-2xl font-black">{totalUsers}</div>
          <div className="mt-1 text-sm text-muted-foreground">Students + Tutors + Admins</div>
        </Card>
        <Card>
          <div className="text-sm font-bold">Bookings</div>
          <div className="mt-3 text-2xl font-black">{totalBookings12m}</div>
          <div className="mt-1 text-sm text-muted-foreground">Last 12 months</div>
        </Card>
        <Card>
          <div className="text-sm font-bold">Reports</div>
          <div className="mt-3 text-2xl font-black">2</div>
          <div className="mt-1 text-sm text-muted-foreground">Pending review</div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">Bookings by month</div>
              <div className="text-xs text-muted-foreground">Growth visualization</div>
            </div>
            <div className="text-xs font-semibold text-muted-foreground">UI-only</div>
          </div>
          <div className="mt-4">
            <BarChart data={analytics.admin.bookingsLast12Months} />
          </div>
        </Card>

        <Card>
          <div className="text-sm font-bold">User split</div>
          <div className="mt-4">
            <DonutChart segments={analytics.admin.userSplit} size={130} thickness={14} />
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-bold">Bookings by address / city</div>
            <div className="text-xs text-muted-foreground">Heatmap-style view (simple bars for now)</div>
          </div>
          <div className="text-xs text-muted-foreground">Replace with real analytics later</div>
        </div>
        <div className="mt-4 grid gap-2">
          {analytics.admin.bookingsByCity.map((x) => (
            <div key={x.label} className="rounded-2xl border border-border bg-muted/60 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{x.label}</div>
                <div className="text-sm font-black">{x.value}</div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-border">
                <div
                  className="h-2 rounded-full bg-primary/80"
                  style={{
                    width: `${Math.max(
                      6,
                      (x.value / Math.max(...analytics.admin.bookingsByCity.map((b) => b.value))) * 100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

