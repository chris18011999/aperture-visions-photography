import Image from "next/image";

export interface HighlightItem {
  title: string;
  image: string;
}

export interface HighlightsProps {
  items: HighlightItem[];
}

export default function Highlights({ items }: HighlightsProps) {
  return (
    <div className="w-full space-y-6 mt-6 px-2">
      <h2 className="text-center text-4xl font-bold">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              className="relative w-full aspect-video overflow-hidden rounded-lg group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-auto bottom-0 w-full p-2 justify-start text-left opacity-100 group-hover:opacity-100 transition-opacity duration-300 items-start md:opacity-0 md:inset-0 bg-black/50 flex flex-col md:items-center md:justify-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
