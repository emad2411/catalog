import { Logo } from "@/components/site/Logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ComponentShowcase } from "@/components/site/ComponentShowcase"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center p-8">
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
          <div className="flex gap-2">
            <Button>Browse products</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Component Showcase</CardTitle>
          <CardDescription>All newly installed shadcn components</CardDescription>
        </CardHeader>
        <CardContent>
          <ComponentShowcase />
        </CardContent>
      </Card>
    </main>
  )
}
