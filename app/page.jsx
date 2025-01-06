"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

// components
import Hero from "./hero";
import Portfolio from "./portfolio/page";
import ComTeste from "./comTeste";

export default function Home() {
  return (
    // <ComTeste />
    <div className="h-screen p-4 flex items-center justify-center bg-light-primary overflow-auto">
      <AnimatePresence mode="popLayout">
        <motion.div
          className="bg-light-secondary rounded-3xl shadow-light-lg flex flex-row gap-4 overflow-hidden"
          layout
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            duration: 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 8,
            duration: 0.4,
          }}
        >
          <Hero />
          <AnimatePresence mode="popLayout">
            {/* <ComTeste /> */}
            {/* <Portfolio /> */}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
