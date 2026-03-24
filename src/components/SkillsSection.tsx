import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Scikit-learn", level: 85 },
    ],
  },
  {
    title: "Web",
    icon: Globe,
    skills: [
      { name: "React.js", level: 78 },
      { name: "HTML & CSS", level: 88 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" className="bg-secondary/30">
    <SectionTitle title="Skills" subtitle="Technologies I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.1 }}
          className="bg-card rounded-xl p-6 border border-border card-hover"
        >
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
            <cat.icon size={20} className="text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold mb-4">{cat.title}</h3>
          <div className="space-y-4">
            {cat.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gradient-bg rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
