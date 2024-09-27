"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ViewBasedAnimation(): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // To keep animation only once

  return (
    <section className="view-based-animation">
      <div
        style={{
          height: "150vh",
          width: "100vw",
        }}
      ></div>
      <motion.div
        style={{
          height: "150vh",
          width: "100vw",
          background: "black",
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          width: "100vw",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </section>
  );
}

// While in view is awesome but there are a lot other way to do it
