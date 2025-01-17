"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// components
import Hero from "./hero";
import Portfolio from "./portfolio/page";
import ComTeste from "./comTeste";
import ComTeste2 from "./comTeste2";
import Resume from "./resume/page";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [openResume, setOpenResume] = useState(false);

  const visiblePortfolio = false;
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
        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        className="bg-light-secondary rounded-3xl shadow-light-lg flex flex-row gap-4 overflow-hidden relative"
      >
        <motion.li>
          <Hero
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            openPortfolio={openPortfolio}
            setOpenPortfolio={setOpenPortfolio}
            openResume={openResume}
            setOpenResume={setOpenResume}
          />
        </motion.li>
        {openPortfolio && (
          <motion.li>
            <Portfolio />
          </motion.li>
        )}
        {openResume && (
          <motion.li>
            <Resume />
          </motion.li>
        )}
      </motion.ul>
    </div>
  );
}
