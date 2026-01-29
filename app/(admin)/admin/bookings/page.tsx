import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export default function AdminBookingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Bookings</div>
        <div className="text-sm text-muted-foreground">All bookings across the platform (UI-only).</div>
      </Card>

      <Card>
        <div className="text-sm font-bold">Recent bookings</div>
        <div className="mt-4 grid gap-2">
          {[
            { id: "ab-1", tutor: "Ayesha Rahman", student: "Demo Student", date: "2026-02-02", status: "upcoming" },
            { id: "ab-2", tutor: "Mahmud Hasan", student: "Student #2", date: "2026-01-10", status: "completed" },
          ].map((b) => (
            <div key={b.id} className="rounded-2xl border border-border bg-muted p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    {b.student} → {b.tutor}
                  </div>
                  <div className="text-xs text-muted-foreground">{b.date}</div>
                </div>
                <Badge className={b.status === "upcoming" ? "bg-primary/10 text-primary border-primary/30" : ""}>
                  {b.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

