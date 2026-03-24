import { Moon, Sun, Palette } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "dark-purple" | "glass";

const themes: { id: Theme; label: string; colors: [string, string] }[] = [
  { id: "dark", label: "Cyber Blue", colors: ["#3b82f6", "#22d3ee"] },
  { id: "dark-purple", label: "Neon Purple", colors: ["#a855f7", "#ec4899"] },
  { id: "glass", label: "Glass White", colors: ["#4f6ef7", "#38bdf8"] },
];

const ThemeToggle = () => {
  const [current, setCurrent] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as Theme) || "dark";
    }
    return "dark";
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("dark", "theme-purple", "theme-glass");

    if (current === "dark") {
      root.classList.add("dark");
    } else if (current === "dark-purple") {
      root.classList.add("dark", "theme-purple");
    } else if (current === "glass") {
      root.classList.add("theme-glass");
    }

    localStorage.setItem("portfolio-theme", current);
  }, [current]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Theme picker"
      >
        <Palette size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 glass rounded-xl p-3 min-w-[180px] shadow-xl z-50"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setCurrent(t.id); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  current === t.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: t.colors[0] }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: t.colors[1] }} />
                </div>
                {t.label}
                {current === t.id && <span className="ml-auto text-primary">✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
