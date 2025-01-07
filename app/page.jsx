"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

// components
import Hero from "./hero";
import Portfolio from "./portfolio/page";
import ComTeste from "./comTeste";
import ComTeste2 from "./comTeste2";

export default function Home() {
  const visiblePortfolio = true;
  return (
    <div className="h-screen p-4 flex items-center justify-center bg-light-primary overflow-auto">
      <motion.ul
        layout
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: 1,
          duration: 0.8,
        }}
        transition={{ duration: 1 }}
        className="bg-light-secondary rounded-3xl shadow-light-lg flex flex-row gap-4 overflow-hidden"
      >
        <motion.li>
          <Hero />
        </motion.li>
        {/* <Hero /> */}

        {/* <Hero /> */}
        {/* <Portfolio /> */}
        {/* {visiblePortfolio && (
          <motion.li>
            <Portfolio />
            <ComTeste />

            <ComTeste2 />
          </motion.li>
        )} */}
        {/* <motion.li>
          <Hero />
        </motion.li> */}
      </motion.ul>
    </div>
  );
}
