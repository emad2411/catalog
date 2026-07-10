import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Catalog</CardTitle>
            <Badge variant="secondary">shadcn ✓</Badge>
          </div>
          <CardDescription>Next.js 16 + Tailwind v4 + shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button>Browse products</Button>
          <Button variant="outline">Learn more</Button>
        </CardContent>
      </Card>
    </main>
  );
}
