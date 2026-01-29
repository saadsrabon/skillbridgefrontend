"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { UserRole } from "./authTypes";
import { useAuth } from "./AuthProvider";

type Props = {
  allow: UserRole[];
  children: React.ReactNode;
};

export function RoleGuard({ allow, children }: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isAllowed = useMemo(() => {
    if (!user) return false;
    return allow.includes(user.role);
  }, [allow, user]);

  useEffect(() => {
    if (user && isAllowed) return;
    if (!user) {
      router.replace(`/login?next=${encodeURIComponent(pathname ?? "/")}`);
      return;
    }
    router.replace("/");
  }, [isAllowed, pathname, router, user]);

  if (!user) return null;
  if (!isAllowed) return null;
  return children;
}

