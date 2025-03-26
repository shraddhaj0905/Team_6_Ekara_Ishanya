import { motion } from "framer-motion";

const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const variants = {
    up: { opacity: 0, y: 20 },
    down: { opacity: 0, y: -20 },
    left: { opacity: 0, x: -20 },
    right: { opacity: 0, x: 20 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
