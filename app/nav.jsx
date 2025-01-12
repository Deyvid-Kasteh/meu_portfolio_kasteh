import React from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness, FileText, Mail, Earth } from "lucide-react";

const Nav = ({
  isOpen,
  setIsOpen,
  openPortfolio,
  setOpenPortfolio,
  openResume,
  setOpenResume,
}) => {


  const navButtonStyle = {
    // backgroundColor: "#8184d3",
    // color: "white",
    color: "#8184d3",
    // borderRadius: "80px",
    // boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    borderBottom: "12px solid #8184d3",
  };





  return (
    <motion.div className="flex flex-col items-center h-full bg-light-secondary rounded-r-3xl shadow-direita border-r-4 border-t-4 border-b-4 border-dashed border-[#8184d3]">
      <nav className=" flex flex-col h-full justify-start mx-4 gap-4">
        <motion.button
          className="relative flex cursor-pointer px-2 py-3 mr-1 my-2 mt-16 h-[150px] text-[#8184d3]"
          whileHover={navButtonStyle}
          onClick={() => {
            // setIsOpen(!isOpen);
            setOpenPortfolio(!openPortfolio);
            setOpenResume(false);
          }}
        >
          <BriefcaseBusiness size={34} />
          <motion.span className="absolute top-[80px] -right-4 ml-2 rotate-90 text-xl font-bold ">
            Portfolio
          </motion.span>
        </motion.button>

        <motion.a
          className="relative flex cursor-pointer px-2 py-3 mr-1 my-2 h-[145px] text-[#8184d3]"
          whileHover={navButtonStyle}
          onClick={() => {
            // setIsOpen(!isOpen);
            setOpenResume(!openResume);
            setOpenPortfolio(false);
          }}
        >
          <FileText size={34} />
          <motion.span className="absolute top-[80px] -right-3 ml-2 rotate-90 text-xl font-bold">
            Resume
          </motion.span>
        </motion.a>

        <motion.a
          className="relative flex cursor-pointer px-2 py-3 mr-1 my-2 h-[140px] text-[#8184d3]"
          whileHover={navButtonStyle}
        >
          <Mail size={34} />
          <motion.span className="absolute top-[75px] -right-3 ml-2 rotate-90 text-xl font-bold ">
            Contato
          </motion.span>
        </motion.a>

        <motion.a
          className="relative flex cursor-pointer px-2 py-3 mr-1 my-2 h-[180px] text-[#8184d3]"
          whileHover={navButtonStyle}
        >
          <Earth size={34} />
          <motion.span className="absolute top-[95px] -right-7 ml-2 rotate-90 text-xl font-bold ">
            Linguagens
          </motion.span>
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Nav;
