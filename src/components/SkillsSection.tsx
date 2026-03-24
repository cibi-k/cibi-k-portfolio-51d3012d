import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";

const categories = [
  { title: "Languages", icon: Code2, skills: [{ name: "Python", level: 90 }, { name: "JavaScript", level: 75 }] },
  { title: "AI / ML", icon: Brain, skills: [{ name: "TensorFlow", level: 80 }, { name: "Scikit-learn", level: 85 }] },
  { title: "Web", icon: Globe, skills: [{ name: "React.js", level: 78 }, { name: "HTML & CSS", level: 88 }] },
  { title: "Tools", icon: Wrench, skills: [{ name: "Git & GitHub", level: 82 }, { name: "Jupyter", level: 90 }] },
];

const CircularProgress = ({ level, name }: { level: number; name: string }) => {
  const r = 36;
  const circumference = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
          <motion.circle
            cx="40" cy="40" r={r} fill="none"
            stroke="url(#grad)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - level / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
              <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm">
          {level}%
        </div>
      </div>
      <span className="text-muted-foreground text-xs text-center">{name}</span>
    </div>
  );
};

const SkillsSection = () => (
  <SectionWrapper id="skills" className="bg-secondary/20">
    <SectionTitle title="Skills" subtitle="Technologies I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-card rounded-xl p-6 neon-border glow-card"
        >
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-5 neon-glow">
            <cat.icon size={20} className="text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold mb-5">{cat.title}</h3>
          <div className="flex gap-4 justify-center">
            {cat.skills.map((skill) => (
              <CircularProgress key={skill.name} level={skill.level} name={skill.name} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
