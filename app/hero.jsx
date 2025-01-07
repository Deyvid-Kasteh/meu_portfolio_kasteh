import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Home, Users, Settings, Menu, X } from "lucide-react";

// images
import minhaFoto2 from "../public/assets/imageQuadradaRemoveBG.png";

// icons
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import Nav from "./nav";

const Hero = () => {
  const iconSize = { fontSize: "40px", color: "white" };

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, text: "Início" },
    { icon: Users, text: "Usuários" },
    { icon: Settings, text: "Configurações" },
  ];

  return (
    <motion.div
      className="flex flex-row items-center justify-center h-[800px] "
      layout
      // animate={{
      //   opacity: 1,
      //   scale: 1,
      //   duration: 0.8,
      // }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      // exit={{ opacity: 0 }}
    >
      <motion.div
        layout
        animate={{
          opacity: 1,
          scale: 1,
          duration: 0.8,
        }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="relative bg-light-accent w-[400px] h-[800px] p-4 rounded-3xl flex flex-col items-center justify-around shadow-right-shadow z-400"
      >
        <motion.div
          className="absolute top-0 right-0 bg-light-accent text-white flex flex-row-reverse items-center justify-center rounded-3xl"
          layout
          animate
          transition={{
            duration: 0.3,
          }}
        >
          <motion.button
            className="w-full p-4 flex items-center justify-center rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
          {/* <nav className="flex flex-row items-center justify-center">
            <motion.ul className="flex flex-row items-center justify-center">
              {isOpen &&
                menuItems.map((item, index) => (
                  <motion.li key={index}>
                    <motion.a href={"#"} key={index}>
                      <item.icon size={24} />
                      <motion.span
                        className="ml-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.text}
                      </motion.span>
                    </motion.a>
                  </motion.li>
                ))}
            </motion.ul>
          </nav> */}
        </motion.div>
        <motion.div
          className="bg-light-secondary p-2 rounded-full flex items-start justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, type: "spring", stiffness: 400, damping: 10 }}
        >
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
        </motion.div>
        <div className="flex flex-col items-center justify-center text-center text-white">
          <span className="text-3xl font-bold">Oi! sou David👋</span>
          <span className="text-2xl font-bold">Desenvolvedor Web/Mobile.</span>
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
      </motion.div>
      {isOpen && <Nav />}
    </motion.div>
  );
};

export default Hero;
