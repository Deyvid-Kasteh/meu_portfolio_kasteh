import { motion } from "framer-motion";

export default function AnimatedDiv() {
  return (
    <motion.div
      initial={{ width: "0px", height: "100%", opacity: 0 }}
      animate={{ width: "1000px", height: "800px", opacity: 1 }}
      transition={{ duration: 2 }} // 2 segundos para a animação
      className="bg-blue-500 overflow-hidden" // Adiciona um fundo azul e oculta qualquer conteúdo extra durante a animação
    >
      {/* Conteúdo dentro da div */}
      {/* <motion.p
        className="text-white"
        initial={{ opacity: 0 }} // O conteúdo começa invisível
        animate={{ opacity: 1 }} // E se torna visível ao longo da animação
        transition={{ delay: 2 }} // Aguarda o fim da animação para aparecer
      >
        Conteúdo da div
      </motion.p> */}
    </motion.div>
  );
}
