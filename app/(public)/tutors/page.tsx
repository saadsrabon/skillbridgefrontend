import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { categories, tutors } from "@/lib/mockData";

export default function TutorsPage() {
  return (
    <div className="sb-container py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-2xl font-black">Browse Tutors</div>
          <div className="text-sm text-muted-foreground">Search & filters are UI-only for now.</div>
        </div>
        <div className="flex gap-2">
          <input
            className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:w-72"
            placeholder="Search by subject, name..."
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="sb-card p-5">
          <div className="text-sm font-bold">Filters</div>
          <div className="mt-4 grid gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Category</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Price</div>
              <div className="mt-2 text-sm text-muted-foreground">$10/hr – $50/hr</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Rating</div>
              <div className="mt-2 text-sm text-muted-foreground">4.5+ ⭐</div>
            </div>
          </div>
        </aside>

        <section className="grid gap-3">
          {tutors.map((t) => (
            <Link key={t.id} href={`/tutors/${t.id}`} className="block">
              <Card className="hover:bg-muted/30">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-lg font-black">{t.name}</div>
                    <div className="truncate text-sm text-muted-foreground">{t.headline}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.subjects.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">{t.location}</div>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-border bg-muted px-4 py-3 text-right">
                    <div className="text-sm font-black">${t.pricePerHour}/hr</div>
                    <div className="text-xs text-muted-foreground">
                      ⭐ {t.rating} ({t.reviewsCount})
                    </div>
                    <div className="mt-2 text-xs font-semibold text-primary">View profile →</div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

