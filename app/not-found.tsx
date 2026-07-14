import { Container } from "@/components/site/Container";
import { ReturnHomeButton } from "@/components/site/ReturnHomeButton";

export default function NotFound() {
  return (
    <Container className="py-24 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold tracking-tighter">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for has drifted off the map.
      </p>
      <ReturnHomeButton />
    </Container>
  );
}
