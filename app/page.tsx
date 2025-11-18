import VerticalHeader from "./components/VerticalHeader/VerticalHeader";
import MainSection from "./components/MainSection/MainSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import About from "./components/About/About";
import FadeContent from "@/components/FadeContent";

export default function Home() {
  return (
    <div className="flex max-w-5xl px-5 m-auto flex-col">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <VerticalHeader />
        <MainSection />
        <WorkExperience />
        <About />
      </FadeContent>
    </div>
  );
}
