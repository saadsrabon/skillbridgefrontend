import { Card } from "@/components/ui/Card";

export default function TutorAvailabilityPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Availability</div>
        <div className="text-sm text-muted-foreground">Set time slots (UI-only).</div>
      </Card>

      <Card>
        <div className="text-sm font-bold">Weekly slots</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="rounded-2xl border border-border bg-muted p-4">
              <div className="text-sm font-semibold">{d}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["6:00 PM", "7:00 PM", "8:00 PM"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-xl border border-border bg-card px-3 py-1 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">Add/remove slots later with real API.</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

