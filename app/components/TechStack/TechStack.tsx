import { TECHSTACK } from "@/lib/utils";
import Image from "next/image";

type TechItem = { id?: string | number; name: string; icon: string };

export default function TechStack(props: { data: { onlyIcons: boolean, tech: TechItem[] } }) {
  const { data } = props;
  return (
    <div className="flex w-full py-1 flex-wrap gap-3 items-center cursor-default">
      {data.tech.map((item : TechItem) => {
        if (data.onlyIcons) {
          return (
            <Image
              key={item.name}
              width={20}
              height={20}
              src={item.icon}
              alt={String(item.name ?? "")}
            />
          );
        }

        return (
          <div
            className="badges flex items-center gap-2 px-4 py-1 h-fit border-1 border-dashed border-gray-700 rounded-lg"
            key={item.id}
          >
            {item.icon && (
              <Image width={20} height={20} src={item.icon} alt={String(item.name ?? "")} />
            )}
            <p className="text-md">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
