import Hero from "@/components/widgets/Hero";
import Highlights, { type HighlightItem } from "@/components/widgets/Highlights";

const highlightItems: HighlightItem[] = [
  {
    image: "/highlights/image-1.png",
    title: "Image 1"
  },
  {
    image: "/highlights/image-2.png",
    title: "Image 2"
  },
  {
    image: "/highlights/image-3.png",
    title: "Image 3"
  },
  {
    image: "/highlights/image-4.png",
    title: "Image 4"
  },
  {
    image: "/highlights/image-5.png",
    title: "Image 5"
  },
  {
    image: "/highlights/image-6.png",
    title: "Image 6"
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title={
          "Where Every Shot Tells a Story"
        }
        image="/hero/image-1.png"
        alt_text="Aperture Visions Photography"
      />
      <Highlights items={highlightItems}/>
    </>
  );
}
