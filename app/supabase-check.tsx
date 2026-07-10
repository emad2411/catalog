import { createClient } from "@supabase/supabase-js";

export default async function SupabaseCheck() {
  // Use anon key directly here — fine for a public connectivity test
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error, count } = await supabase
    .from("products")
    .select("id, title, brand", { count: "exact" })
    .limit(3);

  if (error) {
    return (
      <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm">
        ❌ Supabase error: <code>{error.message}</code>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border bg-card p-4 text-sm">
      <div className="mb-2 font-medium text-primary">
        ✅ Supabase connected — {count} products in DB
      </div>
      <ul className="space-y-1 text-muted-foreground">
        {data?.map((p) => (
          <li key={p.id}>
            <span className="text-foreground">{p.title}</span>
            {p.brand ? <span className="ml-2 text-mute">({p.brand})</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
