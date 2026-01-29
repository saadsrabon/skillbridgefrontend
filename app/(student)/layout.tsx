import { RoleGuard } from "@/components/auth/RoleGuard";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard allow={["student"]}>
      <DashboardShell
        title="Student"
        items={[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/dashboard/bookings", label: "My Bookings" },
          { href: "/dashboard/profile", label: "Profile" },
        ]}
      >
        {children}
      </DashboardShell>
    </RoleGuard>
  );
}

