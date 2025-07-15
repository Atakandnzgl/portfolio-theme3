import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const MotionH1 = motion(forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h1'>>((props, ref) => (
  <h1 ref={ref} {...props} />
)));
const MotionSpan = motion(forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>((props, ref) => (
  <span ref={ref} {...props} />
)));

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div
      className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center  
    overflow-hidden sm:py-0"
    >
      <MotionH1
        className={`inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((char: string, index: number) => (
          <MotionSpan
            className="inline-block"
            key={char + "-" + index}
            variants={singleWord}
          >
            {char}&nbsp;
          </MotionSpan>
        ))}
      </MotionH1>
    </div>
  );
};

export default AnimatedText;
