import { Hero } from "@/components/site/landing/Hero";
import { HowItWorks } from "@/components/site/landing/HowItWorks";
import { WhyDisquote } from "@/components/site/landing/WhyDisquote";
import { Categories } from "@/components/site/landing/Categories";
import { StatsStrip } from "@/components/site/landing/StatsStrip";
import { FinalCTA } from "@/components/site/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyDisquote />
      <Categories />
      <StatsStrip />
      <FinalCTA />
    </>
  );
}
