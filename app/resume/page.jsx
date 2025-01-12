"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <motion.div
      className="w-[1000px] pt-4 flex flex-col items-center gap-1 h-full"
      layout
      // animação entrada do portfolio
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <div>
        <p className="font-zen-dots font-bold text-[170px] leading-none text-light-accent">
          Resume
        </p>
      </div>
      <div className="flex flex-row  ml-4 w-full mx-8 rounded-lg">
        <div className="flex flex-row bg-light-secundary w-full h-[500px] p-4 rounded-lg items-start justify-around m-1 shadow-inner">
          <motion.button
            className="flex bg-light-primary w-[180px] h-12 rounded-md items-center justify-center font-bold text-light-accent"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8184d3",
              color: "white",
              fontWeight: "bold",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            Experiência
          </motion.button>
          <motion.button
            className="flex bg-light-primary w-[180px] h-12 rounded-md items-center justify-center font-bold text-light-accent"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8184d3",
              color: "white",
              fontWeight: "bold",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            Habilidades
          </motion.button>
          <motion.button
            className="flex bg-light-primary w-[180px] h-12 rounded-md items-center justify-center font-bold text-light-accent"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8184d3",
              color: "white",
              fontWeight: "bold",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            Sobre mim
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
