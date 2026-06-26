import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";
import WorkFlow from "@/components/WorkFlow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features/>
        <WorkFlow/>
        <Price/>
        <Feedback/>
        <Footer/>
      </div>
    </div>
  );
}