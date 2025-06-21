import Image from "next/image";

interface HeroProps {
  image: string;
  alt_text: string;
  title: React.ReactNode;
}

export default function Hero({ image, alt_text, title }: HeroProps) {
  return (
    <div className="relative h-dvh w-dvw p-2">
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={alt_text}
          className="absolute inset-0 object-cover"
          fill
        />
        <div className="relative z-10 flex flex-col items-center gap-4 justify-center h-full px-4 md:px-16 bg-black/50">
          <h1 className="text-4xl md:text-8xl text-center font-extrabold tracking-wide text-white font-montserrat">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
