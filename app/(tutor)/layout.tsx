import { RoleGuard } from "@/components/auth/RoleGuard";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function TutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard allow={["tutor"]}>
      <DashboardShell
        title="Tutor"
        items={[
          { href: "/tutor/dashboard", label: "Dashboard" },
          { href: "/tutor/availability", label: "Availability" },
          { href: "/tutor/profile", label: "Profile" },
        ]}
      >
        {children}
      </DashboardShell>
    </RoleGuard>
  );
}

