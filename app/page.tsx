import { Logo } from "@/components/site/Logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SupabaseCheck from "./supabase-check"

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex flex-col items-center gap-4 mb-4">
            <Logo className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-between">
            <CardTitle>disquote</CardTitle>
            <Badge variant="secondary">shadcn ✓</Badge>
          </div>
          <CardDescription>Quote-driven marketplace · Next.js 16 + Tailwind v4 + shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <SupabaseCheck />
          <div className="flex gap-2">
            <Button>Browse products</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}