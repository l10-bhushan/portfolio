import Image from "next/image";
import "./MainAvatarWithFloatingTiles.css"

export default function MainAvatarWithFloatingTiles() {
  return (
    <div className="relative">
      <Image
        className="rounded-full"
        src="/killlua.jpg"
        width={130}
        height={130}
        alt="Programmer avatar"
      />
    </div>
  );
}
