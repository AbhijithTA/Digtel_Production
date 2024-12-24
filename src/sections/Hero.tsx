import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg"

export const HeroSection = () => {
  return (
    <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center ">

      <Image src={memojiImage} alt="Person" />
      </div>
      <div className="bg-gray-950 border border-gray-800 px-4">
        <div></div>
        <div>Available for new projects</div>
      </div>
      <h1>Building Exception user Experiences </h1>
      <p>
        DigTel serves as a comprehensive result capital for all IT needs,
        empowering openings in the moment's digital geography. We streamline IT
        conditions, guaranteeing availability and convenience for the future
        through our devoted crew. Our charge is to bridge the gap between
        society and the realm of IT.
      </p>
      <div className="flex flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">
          Explore My works
          </span>
          <ArrowDown className="size-7"/>
        </button>
        <button className="inline-flex items-center gap-2 border-white/80 bg-white text-black px-6 rounded-xl h-12">
          <span>Lets Connect</span>
        </button>
      </div>
    </div>
    </div>
  );
};
