import type { AuthUser } from "./authTypes";

const KEY = "skillbridge.auth";

type StoredAuth = { user: AuthUser } | { user: null };

export function readAuthRaw() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(KEY);
}

export function readStoredAuth(): StoredAuth {
  if (typeof window === "undefined") return { user: null };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { user: null };
    const parsed = JSON.parse(raw) as StoredAuth;
    return parsed?.user ? parsed : { user: null };
  } catch {
    return { user: null };
  }
}

export function writeStoredAuth(next: StoredAuth) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("skillbridge:auth"));
}

export function clearStoredAuth() {
  writeStoredAuth({ user: null });
}

export function subscribeAuth(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) cb();
  };
  const onCustom = () => cb();
  window.addEventListener("storage", onStorage);
  window.addEventListener("skillbridge:auth", onCustom);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("skillbridge:auth", onCustom);
  };
}

