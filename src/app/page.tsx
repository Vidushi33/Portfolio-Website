import About from "@/components/about";
import BackgroundBubble from "@/components/backgroundBubble";
import Navbar from "@/components/navbar";
import StartSection from "@/components/startSection";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen h-screen bg-black text-white overflow-x-hidden">
      <BackgroundBubble />
      <Navbar />
      <StartSection />
      <About />
    </div>
  );
}
