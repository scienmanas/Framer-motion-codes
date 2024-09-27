"use client";

import { motion, useAnimationControls } from "framer-motion";

export function AnimationControls(): JSX.Element {
  const controls = useAnimationControls();

  return (
    <section className="animation controls flex flex-col w-fit h-fit items-center justify-center gap-8">
      <button
        onClick={() => {
          controls.start("flip");
        }}
        className="px-4 py-2 rounded-md bg-purple-900 text-white"
      >
        Flip it
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        animate={controls}
        whileHover="flip"
        initial="initial"
      ></motion.div>
    </section>
  );
}

// So in all we can define different variants and use it for animation additionally initial and animate are only there which we are working on.
// Initial is just after rendering
// animate is when it is rendered
