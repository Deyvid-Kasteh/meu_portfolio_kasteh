import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Settings, Menu, X } from "lucide-react";

const ComTeste2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, text: "Início" },
    { icon: Users, text: "Usuários" },
    { icon: Settings, text: "Configurações" },
  ];

  return (
    <motion.div
      className="relative top-0 left-0 h-screen bg-gray-800 text-white"
      layout
      animate={{
        width: isOpen ? 240 : 70,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Botão Toggle */}
      <motion.button
        className="w-full p-4 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgb(55 65 81)" }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Itens do Menu */}
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            className="flex items-center px-4 py-3 cursor-pointer"
            whileHover={{ backgroundColor: "rgb(55 65 81)" }}
          >
            <item.icon size={24} />
            {isOpen && (
              <motion.span
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.text}
              </motion.span>
            )}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default ComTeste2