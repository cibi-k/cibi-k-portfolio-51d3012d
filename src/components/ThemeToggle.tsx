import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center"
        animate={{ x: dark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {dark ? <Moon size={12} className="text-primary-foreground" /> : <Sun size={12} className="text-primary-foreground" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
