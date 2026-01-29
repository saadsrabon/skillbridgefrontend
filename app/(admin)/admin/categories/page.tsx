import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { categories } from "@/lib/mockData";

export default function AdminCategoriesPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="text-xl font-black">Categories</div>
        <div className="text-sm text-muted-foreground">Manage tutor categories (UI-only).</div>
      </Card>

      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-bold">All categories</div>
            <div className="text-xs text-muted-foreground">Add/edit/delete later with your backend</div>
          </div>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110">
            Add category
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}

