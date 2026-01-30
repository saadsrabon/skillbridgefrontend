import { cookies } from "next/headers";

export const userService = {
    getSession: async () => {
        try {
            const cookiStore = await cookies()
            const res = await fetch("http://localhost:5000/api/auth/get-session", {
                headers: {
                    cookie: cookiStore.toString()
                },
                credentials: "include",
            });
            const status = await res.json();
            return status;
        } catch (error) {
            console.error(error);
        }
    }
}