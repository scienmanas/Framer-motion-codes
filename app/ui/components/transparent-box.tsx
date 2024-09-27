"use client";

import { motion } from "framer-motion";

export function TransparentBox(): JSX.Element {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <section className="boxes flex w-fit h-fit items-center justify-center flex-row gap-6 flex-wrap">
      <motion.div
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          delay: 1,
          stiffness: 100,
        }}
        className="transparent-box w-40 h-40 bg-transparent border-2 border-red-500 border-dashed rounded-md text-center"
      >
        Box
      </motion.div>
      {/* This drag doesn't take more more space just transalted whith space it have */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="w-40 h-40 flex items-center justify-center border-red-500 border-2 border-dashed"
      ></motion.div>
      <motion.ul animate="hidden" variants={list}>
        <motion.li className="text-black" variants={item}>
          1{" "}
        </motion.li>
        <motion.li className="text-black" variants={item}>
          {" "}
          2
        </motion.li>
        <motion.li className="text-black" variants={item}>
          {" "}
          3
        </motion.li>
      </motion.ul>
    </section>
  );
}

// darg and all are gestures
