"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollingParagraphProps {
  value: string;
}

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

export default function ScrollingParagraph({ value }: ScrollingParagraphProps) {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "start 0.10"],
  });

  const words = value.split(" ");

  return (
    <div className="overflow-hidden flex justify-center">
      <p
        className="flex flex-wrap text-5xl leading-none p-10 max-w-5xl text-white"
        ref={element}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
