"use client";

import React, { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { AuthUser, UserRole } from "./authTypes";
import { clearStoredAuth, readAuthRaw, subscribeAuth, writeStoredAuth } from "./authStorage";

type AuthContextValue = {
  user: AuthUser | null;
  isAuthed: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  register: (input: { name: string; email: string; role: UserRole }) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function useStoredUser() {
  // Cache snapshot so getSnapshot returns a stable reference when storage hasn't changed.
  let lastRaw: string | null = null;
  let lastUser: AuthUser | null = null;

  return useSyncExternalStore(
    subscribeAuth,
    () => {
      const raw = readAuthRaw();
      if (raw === lastRaw) return lastUser;
      lastRaw = raw;
      if (!raw) {
        lastUser = null;
        return lastUser;
      }
      try {
        const parsed = JSON.parse(raw) as { user?: AuthUser | null } | null;
        lastUser = parsed?.user ?? null;
      } catch {
        lastUser = null;
      }
      return lastUser;
    },
    () => null,
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useStoredUser();

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,
      isAuthed: Boolean(user),
      login: (nextUser) => writeStoredAuth({ user: nextUser }),
      logout: () => clearStoredAuth(),
      register: ({ name, email, role }) => {
        const nextUser: AuthUser = {
          id: crypto.randomUUID(),
          name,
          email,
          role,
        };
        writeStoredAuth({ user: nextUser });
      },
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider />");
  return ctx;
}

