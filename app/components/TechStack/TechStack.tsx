import { TECHSTACK } from "@/lib/utils";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="flex max-w-xl flex-wrap gap-3 items-center cursor-default">
      {TECHSTACK.map((item) => {
        return (
          <div
            className="flex items-center gap-2 px-4 py-1 h-fit bg-gray-900 border-1 border-dashed border-gray-700 rounded-lg"
            key={item.id}
          >
            <Image width={20} height={20} src={item.icon} alt={item.name} />
            <p className="text-md">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
