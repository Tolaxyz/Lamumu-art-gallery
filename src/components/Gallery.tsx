"use client";

import { motion } from "framer-motion";
import ArtworkCard from "./ArtworkCard";

const artworks = [
  "/artworks/art1.jpg",
  "/artworks/art2.jpg",
  "/artworks/art3.jpg",
  "/artworks/art4.jpg",
];

export default function Gallery() {
  return (
    <div className="overflow-hidden w-full max-w-5xl">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {artworks.map((art, idx) => (
          <ArtworkCard key={idx} src={art} />
        ))}
        {/* Duplicate for infinite loop effect */}
        {artworks.map((art, idx) => (
          <ArtworkCard key={`dup-${idx}`} src={art} />
        ))}
      </motion.div>
    </div>
  );
}
