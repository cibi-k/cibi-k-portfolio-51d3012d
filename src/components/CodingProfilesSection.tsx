import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    url: "#",
    color: "235 80% 55%",
    icon: "LC",
    description: "Solving DSA problems",
  },
  {
    name: "CodeChef",
    url: "#",
    color: "30 80% 50%",
    icon: "CC",
    description: "Competitive programming",
  },
  {
    name: "GeeksforGeeks",
    url: "#",
    color: "140 60% 40%",
    icon: "GfG",
    description: "Practice & learning",
  },
  {
    name: "HackerRank",
    url: "#",
    color: "150 70% 40%",
    icon: "HR",
    description: "Skills & certifications",
  },
];

const CodingProfilesSection = () => (
  <SectionWrapper id="coding-profiles">
    <SectionTitle title="Coding Profiles" subtitle="Where I practice and compete" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {profiles.map((p, i) => (
        <motion.a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group bg-card rounded-xl border border-border p-6 text-center glow-card block"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-lg transition-transform group-hover:scale-110 duration-300"
            style={{ background: `linear-gradient(135deg, hsl(${p.color}), hsl(${p.color} / 0.7))` }}
          >
            {p.icon}
          </div>
          <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{p.description}</p>
          <span className="inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Visit <ExternalLink size={12} />
          </span>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default CodingProfilesSection;
