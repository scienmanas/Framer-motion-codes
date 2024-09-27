"use client";

import { motion, MotionConfig } from "framer-motion";

export function Gestures(): JSX.Element {
  return (
    <section className="gestures flex flex-col gap-5 w-fit h-fit items-center justify-center">
      {/* Motion config helps to set configuration for all child components, but currently
    accepts only one prop :
    - transition
    */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "2.5deg",
          }}
          className="px-4 py-2 rounded-sm bg-purple-900 text-white"
        >
          Click Me
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "-2.5deg",
          }}
          className="px-4 py-2 rounded-sm bg-purple-900 text-white"
        >
          Click Me
        </motion.button>
        {/* <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "2.5deg",
          }}
          transition={{
            duration: 0.125,
            ease: "easeInOut",
          }}
          className="px-4 py-2 rounded-sm bg-purple-900 text-white"
        >
          Click Me
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "-2.5deg",
          }}
          transition={{
            duration: 0.125,
            ease: "easeInOut",
          }}
          className="px-4 py-2 rounded-sm bg-purple-900 text-white"
        >
          Click Me
        </motion.button> */}
      </MotionConfig>
    </section>
  );
}
