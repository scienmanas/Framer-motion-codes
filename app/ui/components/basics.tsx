"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Basics(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center gap-4 w-[200px] h-fit">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-green-800 rounded-full font-bold text-white"
      >
        Click me
      </button>
      {/* Animate presence helps in  */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="rotating-box" // Add a key to ensure correct exit animations
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: 150,
            }}
            transition={{
              duration: 1,
              //   type: "spring",
              ease: "backInOut",
              //   times: [0, 0.25, 0.5, 0.85, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            className="w-[150px] h-[150px] bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
