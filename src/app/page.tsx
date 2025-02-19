import ScrollingParagraph from "@/components/ScrollingParagraph";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { services } from "@/data/services";
import OurStory from "@/components/OurStory";

export default function Home() {
  const cards = [
    {
      src: "/images/card1.jpg",
      title: "Card 1",
      category: "Category 1",
      content: <p>This is the detailed content for Card 1.</p>,
    },
    {
      src: "/images/card2.jpg",
      title: "Card 2",
      category: "Category 2",
      content: <p>This is the detailed content for Card 2.</p>,
    },
    {
      src: "/images/card3.jpg",
      title: "Card 3",
      category: "Category 3",
      content: <p>This is the detailed content for Card 3.</p>,
    },
  ];
  return (
    <div>
      {/* <Header />
      <HeroSection /> */}
      <div style={{ height: "80vh" }}></div>
      <ScrollingParagraph value="here are many variations of , don't look even slightly believable. ng text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ." />
      <div style={{ height: "50vh" }}></div>
      <Carousel
        items={services.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      />
      <OurStory />
    </div>
  );
}
