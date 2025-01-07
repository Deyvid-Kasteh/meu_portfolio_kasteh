import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Users, Settings, Menu, X } from "lucide-react";

const Nav = () => {
  const iconColor = "#8184d3";
  const menuItems = [
    { icon: Home, text: "Início" },
    { icon: Users, text: "Usuários" },
    { icon: Settings, text: "Configurações" },
  ];
  return (
    <motion.div className="flex flex-col items-center h-full rounded-3xl">
      <nav className="relative mt-4 flex flex-col h-full">
        <motion.a
          className="flex cursor-pointer px-4 py-3 rounded-full h-[160px]"
          //   whileHover={{ backgroundColor: "#8184d3", color: "white" }}
        >
          <Home size={34} color={iconColor} />
          <motion.span className="absolute top-[70px] right-1.5 ml-2 rotate-90 text-xl font-bold text-[#8184d3]">
            Início
          </motion.span>
        </motion.a>
        <motion.a
          className="flex cursor-pointer px-4 py-3 rounded-full h-[100px]"
          whileHover={{ backgroundColor: "#8184d3", color: "white" }}
        >
          <Users size={34} color={iconColor} />
        </motion.a>
        <motion.a
          className="flex cursor-pointer px-4 py-3 rounded-full h-[100px]"
          whileHover={{ backgroundColor: "#8184d3", color: "white" }}
        >
          <Settings size={34} color={iconColor} />
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Nav;
