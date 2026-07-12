"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export function ComponentShowcase() {
  const [selectValue, setSelectValue] = useState("")

  return (
    <>
      <Toaster />
      <div className="space-y-8">
        {/* Input */}
        <div className="space-y-2">
          <Label htmlFor="email">Input</Label>
          <Input id="email" placeholder="you@example.com" />
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <Label htmlFor="notes">Textarea</Label>
          <Textarea id="notes" placeholder="Add notes about the product..." />
        </div>

        {/* Select */}
        <div className="space-y-2">
          <Label>Select</Label>
          <Select value={selectValue} onValueChange={(v) => setSelectValue(v ?? "")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cameras">Cameras</SelectItem>
              <SelectItem value="lenses">Lenses</SelectItem>
              <SelectItem value="lighting">Lighting</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dropdown Menu */}
        <div className="space-y-2">
          <Label>Dropdown Menu</Label>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Dialog */}
        <div className="space-y-2">
          <Label>Dialog</Label>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a quote</DialogTitle>
                <DialogDescription>
                  Get competing prices from multiple sellers for this product.
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                This is a preview of the dialog component.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Sonner Toast */}
        <div className="space-y-2">
          <Label>Sonner Toast</Label>
          <Button
            variant="outline"
            onClick={() => toast("Quote submitted successfully!")}
          >
            Trigger toast
          </Button>
        </div>

        {/* Table */}
        <div className="space-y-2">
          <Label>Table</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Sony A7IV</TableCell>
                <TableCell className="font-mono">$2,498.00</TableCell>
                <TableCell>
                  <span className="text-green-500">In stock</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sony A7RV</TableCell>
                <TableCell className="font-mono">$3,898.00</TableCell>
                <TableCell>
                  <span className="text-amber-500">Limited</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Skeleton */}
        <div className="space-y-2">
          <Label>Skeleton</Label>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
