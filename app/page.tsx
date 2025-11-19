import WorkExperience from "./components/WorkExperience/WorkExperience";
import About from "./components/About/About";
import FadeContent from "@/components/FadeContent";
import HeroSection from "./components/HeroSection/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="wrapper level-3 flex max-w-4xl px-5 m-auto my-10 flex-col max-sm:px-0">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <HeroSection />
        <WorkExperience />
        <About />
        <Contact />
        <Footer />
      </FadeContent>
    </div>
  );
}
