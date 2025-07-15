import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const MotionDiv = motion(forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => (
  <div ref={ref} {...props} />
)));

const TransitionEffect = () => {
  return (
    <>
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-slideGreen"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
