import { RoleGuard } from "@/components/auth/RoleGuard";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard allow={["admin"]}>
      <DashboardShell
        title="Admin"
        items={[
          { href: "/admin", label: "Dashboard" },
          { href: "/admin/users", label: "Users" },
          { href: "/admin/bookings", label: "Bookings" },
          { href: "/admin/categories", label: "Categories" },
        ]}
      >
        {children}
      </DashboardShell>
    </RoleGuard>
  );
}

