import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { studentBookings } from "@/lib/mockData";

export default function StudentBookingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">My Bookings</div>
        <div className="text-sm text-muted-foreground">View upcoming and past sessions (UI-only).</div>
      </Card>

      <Card>
        <div className="text-sm font-bold">Booking history</div>
        <div className="mt-4 grid gap-2">
          {studentBookings.map((b) => (
            <div key={b.id} className="rounded-2xl border border-border bg-muted p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    {b.subject} • {b.tutorName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {b.date} • {b.time}
                  </div>
                  <div className="mt-2">
                    <Link
                      href={`/dashboard/tutors/${b.tutorId}`}
                      className="text-xs font-semibold text-primary hover:brightness-110"
                    >
                      View tutor profile →
                    </Link>
                  </div>
                </div>
                <Badge className={b.status === "Upcoming" ? "bg-primary/10 text-primary border-primary/30" : ""}>
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

