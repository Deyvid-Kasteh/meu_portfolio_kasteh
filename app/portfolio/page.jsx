"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";

// Images
import BibliotecaWeb from "../../public/assets/bibliotecaWEB.png";
import appBiblioteca from "../../public/assets/AppBiblioteca.png";
import appTela from "../../public/assets/appTela.jpg";
import appTela2 from "../../public/assets/appTela2.jpg";
import iphone from "../../public/assets/iphone.png";
import iphone2 from "../../public/assets/iphone2.png";
import starbucksLandingPage from "../../public/assets/starbucks.png";
import lotofacilLandingPage from "../../public/assets/lotofacil.png";

const Portfolio = () => {
  return (
    <motion.div
      className="pt-4 rounded-3xl flex flex-col items-center gap-10 pr-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      // style={{ x: -20 }}
    >
      <div>
        <p className="font-zen-dots font-bold text-[170px] leading-none ">
          Portfolio
        </p>
      </div>
      <div className="flex flex-col w-[940px] gap-10">
        <div className="h-[320px] w-full flex flex-row items-center justify-between">
          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={BibliotecaWeb}
              alt="Primeira imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={appTela}
              alt="Segunda imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={appTela2}
              alt="Segunda imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="h-[160px] w-full flex flex-row items-center justify-between">
          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={starbucksLandingPage}
              alt="Segunda imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={lotofacilLandingPage}
              alt="Segunda imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="h-full relative transition-transform duration-300 hover:scale-105">
            <Image
              src={BibliotecaWeb}
              alt="Primeira imagem"
              className="h-full w-auto rounded-3xl"
              // objectFit="contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
