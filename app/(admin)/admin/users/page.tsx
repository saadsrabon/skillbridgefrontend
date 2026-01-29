import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { adminUsers } from "@/lib/mockData";

export default function AdminUsersPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Users</div>
        <div className="text-sm text-muted-foreground">Ban/unban UI only.</div>
      </Card>

      <Card>
        <div className="text-sm font-bold">All users</div>
        <div className="mt-4 grid gap-2">
          {adminUsers.map((u) => (
            <div key={u.id} className="rounded-2xl border border-border bg-muted p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">{u.name}</div>
                  <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                    <Badge>{u.role}</Badge>
                    <Badge className={u.status === "active" ? "bg-primary/10 text-primary border-primary/30" : ""}>
                      {u.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-card/80">
                    Ban
                  </button>
                  <button className="rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-card/80">
                    Unban
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

