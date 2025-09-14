import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { HowItWorks } from "./components/HowItWorks";
import { CTAFooter } from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
      </main>
      <CTAFooter />
    </div>
  );
}