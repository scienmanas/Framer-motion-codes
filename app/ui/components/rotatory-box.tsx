"use client";

import { motion } from "framer-motion";

export function RotatoryBox(): JSX.Element {
  return (
    <section className="w-fit flex items-center justify-center flex-row h-96">
      <motion.div
        className="w-40 h-40 bg-red-800"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </section>
  );
}
