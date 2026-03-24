import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";
import profileImg from "@/assets/profile.png";

const ParticleField = lazy(() => import("./ParticleField"));

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
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] z-[1]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glowing Profile Image */}
          <motion.div
            className="mx-auto mb-8 relative w-32 h-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full gradient-bg opacity-60 blur-xl animate-pulse-glow" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden neon-border p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden gradient-bg p-[2px]">
                <img src={profileImg} alt="Cibi K" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </motion.div>

          <p className="text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs neon-glow inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
            Welcome to my portfolio
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-4 mt-6">
            Hi, I'm{" "}
            <span className="gradient-text drop-shadow-lg">Cibi K</span>
          </h1>

          <div className="h-10 mb-8">
            <span className="font-display text-xl md:text-2xl text-muted-foreground">
              {text}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse-glow" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Building intelligent systems using Python, Deep Learning, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all neon-glow hover:scale-105 duration-300"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 bg-card/50 text-foreground px-8 py-3.5 rounded-xl font-medium border border-border/50 hover:border-primary/40 transition-all backdrop-blur-sm hover:scale-105 duration-300"
            >
              Download Resume <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-card/50 text-foreground px-8 py-3.5 rounded-xl font-medium border border-border/50 hover:border-accent/40 transition-all backdrop-blur-sm hover:scale-105 duration-300"
            >
              Contact Me <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
