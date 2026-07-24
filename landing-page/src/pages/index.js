import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";
import WorkFlow from "@/components/WorkFlow";
import FadeIn from "@/components/FadiIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />

        <FadeIn direction="up">
          <Features />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <WorkFlow />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <Price />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <Feedback />
        </FadeIn>

        <FadeIn direction="up">
          <Footer />
        </FadeIn>
      </div>
    </div>
  );
}