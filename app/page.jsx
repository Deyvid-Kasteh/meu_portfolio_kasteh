"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import minhaFoto2 from "../public/assets/imageQuadradaRemoveBG.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Se não houver preferência salva, vamos usar o tema claro por padrão
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-light-primary">
      <div className="bg-light-secondary p-4 rounded">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="bg-light-accent p-4 rounded flex items-center justify-center">
            <div className="bg-light-secondary p-2 rounded-full flex items-center justify-center">
              <div className="w-[350px] h-[350px] 2xl:w-[600px] 2xl:h-[600px] flex items-center justify-center bg-light-accent rounded-full">
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
          </div>
          <div className="bg-red-100 p-4 rounded">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-red-200 p-2 rounded">Interno 1</div>
              <div className="bg-red-200 p-2 rounded">Interno 2</div>
              <div className="bg-red-200 p-2 rounded">Interno 3</div>
              <div className="bg-red-200 p-2 rounded">Interno 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
