import Image from "next/image";
import "./MainAvatarWithFloatingTiles.css"

export default function MainAvatarWithFloatingTiles() {
  return (
    <div className="relative">
      <Image
        src="/programmer.svg"
        width={400}
        height={400}
        alt="Programmer avatar"
      />
      {/* <div className="cloud absolute top-[-20] left-15">
        <p className="absolute pl-4">Next.js</p>
      </div>
      <div className="cloud absolute top-[60] left-[-20]">
        <p className="absolute pl-4">React.js</p>
      </div>
      <div className="cloud absolute top-[-30] right-10">
        <p className="absolute pl-1">HTML</p>
      </div>
      <div className="cloud absolute top-[60] right-[-20]">
        <p className="absolute pl-8">JS</p>
      </div> */}
    </div>
  );
}
