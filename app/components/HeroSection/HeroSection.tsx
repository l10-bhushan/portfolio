import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";
import MainAvatarWithFloatingTiles from "../MainAvatarWithFloatingTiles/MainAvatarWithFloatingTiles";

export default function HeroSection() {
  return (
    <div className="flex min-h-dvh flex-col items-center pt-20 grow px-10 gap-2">
      {/* <section className="flex gap-5 items-center justify-center"> */}
      <MainAvatarWithFloatingTiles />
      <WritingText
        text="Hi, I'm Bhushan"
        className="text-6xl"
        inView={true}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1,
        }}
      />
      {/* <p className="flex items-center text-green-400 min-h-7 bg-gray-900 rounded-full px-3 text-xs">Available for work</p> */}
      {/* </section> */}
      <WritingText
        text="Senior Frontend developer | Entrepreneur"
        className="text-gray-700 text-3xl"
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
        className="text-gray-600"
        inView={true}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1,
        }}
      />
      <SocialMediaSection />
      <section className="flex gap-5 py-2">
        {/* Todo: Need to fix, this isn't responsive */}
        <button className="flex justify-evenly w-48 py-2 px-2 items-center min-h-10 border-2 border-blue-200 rounded-xl text-blue-400 cursor-pointer">
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
        </button>
        <button className="flex justify-evenly w-48 py-2 px-2 items-center min-h-10 rounded-xl bg-blue-300 text-white cursor-pointer">
          <p>Get in touch</p>
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
            className="lucide lucide-send-icon lucide-send"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </button>
      </section>
    </div>
  );
}
