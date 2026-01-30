import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { categories, testimonials, tutors } from "@/lib/mockData";
import {authClient} from "@/lib/auth-client"
export default async function HomePage() {
const session = await authClient.getSession();
console.log(session)


  return (
    <div className="sb-grid-bg">
      <div className="sb-container py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="sb-surface p-8">
          <Badge className="border-primary/30 bg-primary/10 text-primary">SkillBridge 🎓</Badge>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Connect with Expert Tutors,{" "}
            <span className="text-primary">Learn Anything</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Browse tutors by subject, rating, and price. Book sessions instantly. Manage everything from
            your dashboard — student, tutor, or admin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/tutors">Browse Tutors</ButtonLink>
            <ButtonLink variant="secondary" href="/register">
              Get Started
            </ButtonLink>
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              I already have an account
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Card>
              <CardTitle>Students</CardTitle>
              <CardDescription>Book sessions and review tutors after completion.</CardDescription>
            </Card>
            <Card>
              <CardTitle>Tutors</CardTitle>
              <CardDescription>Set availability, manage profile, track sessions.</CardDescription>
            </Card>
            <Card>
              <CardTitle>Admins</CardTitle>
              <CardDescription>Manage users, bookings, and categories.</CardDescription>
            </Card>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { k: "10k+", v: "Learners" },
              { k: "1k+", v: "Tutors" },
              { k: "4.8/5", v: "Avg rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-muted/60 px-4 py-4">
                <div className="text-2xl font-black">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sb-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">Featured Tutors</div>
              <div className="text-xs text-muted-foreground">UI-only sample data</div>
            </div>
            <Link href="/tutors" className="text-sm font-semibold text-primary hover:brightness-110">
              View all
            </Link>
          </div>

          <div className="mt-4 grid gap-3">
            {tutors.slice(0, 3).map((t) => (
              <Link key={t.id} href={`/tutors/${t.id}`} className="sb-card p-4 hover:bg-muted/30">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">{t.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{t.headline}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {t.subjects.slice(0, 3).map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-sm font-bold">${t.pricePerHour}/hr</div>
                    <div className="text-xs text-muted-foreground">
                      ⭐ {t.rating} ({t.reviewsCount})
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        </div>

        {/* Logo cloud */}
        <section className="mt-10 sb-card p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-bold">Trusted by learners worldwide</div>
            <div className="text-xs text-muted-foreground">Brand placeholders</div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["NextLevel Academy", "StudyPro", "TutorHub", "SkillLabs", "Campus+"].map((b) => (
              <div
                key={b}
                className="grid h-12 place-items-center rounded-2xl border border-border bg-muted/60 text-xs font-bold text-muted-foreground"
              >
                {b}
              </div>
            ))}
          </div>
        </section>

      {/* How it works */}
      <section className="mt-10 sb-surface p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-2xl font-black">How it works</div>
            <div className="text-sm text-muted-foreground">From discovery to booking in 3 steps.</div>
          </div>
          <Link href="/tutors" className="text-sm font-semibold text-primary hover:brightness-110">
            Start browsing →
          </Link>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Card>
            <CardTitle>1) Find a tutor</CardTitle>
            <CardDescription>Search by subject, rating, and price.</CardDescription>
          </Card>
          <Card>
            <CardTitle>2) Pick a time</CardTitle>
            <CardDescription>See availability and choose a slot that fits.</CardDescription>
          </Card>
          <Card>
            <CardTitle>3) Learn & review</CardTitle>
            <CardDescription>After the session, leave feedback to help others.</CardDescription>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="sb-surface p-8">
          <div className="text-2xl font-black">Popular categories</div>
          <div className="mt-2 text-sm text-muted-foreground">
            Filter tutors by category (UI-only right now).
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Badge key={c} className="hover:bg-muted/70">
                {c}
              </Badge>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/tutors" variant="secondary">
              Explore tutors
            </ButtonLink>
          </div>
        </div>

        <div className="sb-surface p-8">
          <div className="text-2xl font-black">Why SkillBridge</div>
          <div className="mt-2 grid gap-3">
            {[
              { k: "Quality first", v: "Tutor profiles with ratings and reviews." },
              { k: "Instant booking", v: "Pick a slot and confirm in seconds." },
              { k: "Role-based dashboards", v: "Student, Tutor, and Admin workflows." },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-border bg-muted/60 p-4">
                <div className="text-sm font-bold">{x.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-10 sb-surface p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-2xl font-black">What people say</div>
            <div className="text-sm text-muted-foreground">Testimonials (placeholder content).</div>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span className="rounded-xl border border-border bg-muted px-3 py-2">
              4.8 avg rating
            </span>
            <span className="rounded-xl border border-border bg-muted px-3 py-2">
              250+ reviews
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-muted/60 p-5">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
              <div className="mt-3 text-sm text-muted-foreground">“{t.quote}”</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 sb-surface p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="text-2xl font-black">
              Ready to learn with an expert tutor?
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Create an account, choose your role, and jump into your dashboard. No API calls yet — just UI.
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/register">Create account</ButtonLink>
              <ButtonLink href="/login" variant="secondary">
                Login
              </ButtonLink>
              <ButtonLink href="/tutors" variant="ghost">
                Browse tutors
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-6">
            <div className="text-sm font-bold">Demo tip</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Use <span className="font-semibold text-foreground">Quick login</span> on the login page to preview
              student/tutor/admin dashboards instantly.
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
        UI-only build • No API calls • Client-side protected routes
      </footer>
      </div>
    </div>
  );
}

