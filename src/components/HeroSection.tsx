import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "AI & Machine Learning Developer",
  "Deep Learning Enthusiast",
  "Python Developer",
  "Full Stack Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 dark:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full gradient-bg opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full gradient-bg opacity-10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Welcome to my portfolio</p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Cibi K</span>
          </h1>

          <div className="h-10 mb-6">
            <span className="font-display text-xl md:text-2xl text-muted-foreground">
              {text}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse-glow" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Building intelligent systems using Python, Deep Learning, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
