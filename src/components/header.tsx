"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold text-center mt-6 text-white"
      animate={{
        rotate: [0, -3, 3, -3, 3, 0], // wiggle
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
      }}
    >
      lamumudotxyz art gallery
    </motion.h1>
  );
}
