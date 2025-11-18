import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";
import MainAvatarWithFloatingTiles from "../MainAvatarWithFloatingTiles/MainAvatarWithFloatingTiles";
import TechStack from "../TechStack/TechStack";
import GetInTouch from "../GetInTouch/GetInTouch";

export default function HeroSection() {
  return (
    <div className="flex flex-col py-10 px-10 gap-2">
      <MainAvatarWithFloatingTiles />
      <WritingText
        text="Hi, I'm Bhushan"
        className="text-4xl"
        inView={true}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1,
        }}
      />
      <WritingText
        text="Senior Frontend developer | Entrepreneur"
        className="text-gray-300 text-2xl"
        inView={true}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1,
        }}
      />
      <WritingText
        text="I love building websites and exploring new horizons in tech..."
        className="text-gray-300 text-lg"
        inView={true}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1,
        }}
      />
      <SocialMediaSection footer={false} />
      <TechStack />
      <section className="flex gap-5 py-2 items-center">
        {/* Todo: Need to fix, this isn't responsive */}
        <a href="/Resume.pdf" className="flex text-md gap-3 justify-evenly w-fit py-1 px-3 items-center min-h-10 border-1 border-gray-700 rounded-xl cursor-pointer">
          <p>Resume / CV</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scroll-text-icon lucide-scroll-text"
          >
            <path d="M15 12h-5" />
            <path d="M15 8h-5" />
            <path d="M19 17V5a2 2 0 0 0-2-2H4" />
            <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
          </svg>
        </a>
        <GetInTouch/>
      </section>
    </div>
  );
}
