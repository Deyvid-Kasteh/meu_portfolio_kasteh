import React from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness, FileText, Mail, Earth } from "lucide-react";

const Nav = () => {
  const iconColor = "#8184d3";
  return (
    <motion.div className="flex flex-col items-center h-full rounded-3xl">
      <nav className=" flex flex-col h-full justify-around">
        <motion.a
          className="relative flex cursor-pointer px-4 py-3 rounded-full h-[160px] text-[#8184d3]"
          whileHover={{ color: "#6c6eb1" }}
        >
          <BriefcaseBusiness size={34} />
          <motion.span className="absolute top-[80px] -right-2 ml-2 rotate-90 text-xl font-bold ">
            Portfolio
          </motion.span>
        </motion.a>

        <motion.a
          className="relative flex cursor-pointer px-4 py-3 h-[160px] text-[#8184d3]"
          whileHover={{ color: "#6c6eb1" }}
        >
          <FileText size={34} />
          <motion.span className="absolute top-[80px] -right-0.5 ml-2 rotate-90 text-xl font-bold">
            Resume
          </motion.span>
        </motion.a>

        <motion.a
          className="relative flex cursor-pointer px-4 py-3 rounded-full h-[160px] text-[#8184d3]"
          whileHover={{ color: "#6c6eb1" }}
        >
          <Mail size={34} />
          <motion.span className="absolute top-[75px] -right-1 ml-2 rotate-90 text-xl font-bold ">
            Contato
          </motion.span>
        </motion.a>
        <motion.a
          className="relative flex cursor-pointer px-4 py-3 rounded-full h-[160px] text-[#8184d3]"
          whileHover={{ color: "#6c6eb1" }}
        >
          <Earth size={34} />
          <motion.span className="absolute top-[95px] -right-5 ml-2 rotate-90 text-xl font-bold ">
            Linguagens
          </motion.span>
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Nav;
