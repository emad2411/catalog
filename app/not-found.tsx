"use client";
import { Container } from "@/components/site/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold tracking-tighter">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for has drifted off the map.
      </p>
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </Container>
  );
}
