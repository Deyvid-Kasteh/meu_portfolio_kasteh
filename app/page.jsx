"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import minhaFoto2 from "../public/assets/imageQuadradaRemoveBG.png";


import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export default function Home() {
  const iconSize = { fontSize: "40px", color: "white" };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-light-primary">
      <div className="bg-light-secondary rounded-3xl shadow-light-lg">
        <div className="grid grid-cols-1 xl:grid-cols-[400px_1000px] h-[800px] gap-4 ">
          <div className="bg-light-accent p-4 rounded-3xl flex flex-col items-center justify-around shadow-right-shadow">
            <div className="bg-light-secondary p-2 rounded-full flex items-start justify-center">
              <div className="flex justify-start bg-light-accent rounded-full">
                <Image
                  src={minhaFoto2}
                  priority
                  quality={100}
                  alt="my photografy"
                  className="rounded-full object-contain"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <span className="text-3xl font-bold">Oi! sou David👋</span>
              <span className="text-2xl font-bold">
                Desenvolvedor Web/Mobile.
              </span>
              <p>
                Mais de 2 anos de experiência em projetos utilizando JavaScript,
                TypeScript, React, React Native, Next.js, MongoDB e PostgreSQL.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <TbBrandTypescript style={iconSize} />
              </div>
              <div>
                <TbBrandReactNative style={iconSize} />
              </div>
              <div>
                <FaReact style={iconSize} />
              </div>
              <div>
                <FaJava style={iconSize} />
              </div>
              <div>
                <SiMongodb style={iconSize} />
              </div>
            </div>
          </div>
          <div className="p-4 rounded-3xl flex flex-col items-center">
            <div>
              <p className="font-zen-dots font-bold text-[170px] leading-none">
                Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
