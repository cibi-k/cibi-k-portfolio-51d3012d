import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Get to know me better" />
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
            <img src={profileImg} alt="Cibi K" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-72 md:h-72 rounded-2xl gradient-bg opacity-20 -z-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-2xl font-bold mb-4">
          AI Student & Developer
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm a first-year Artificial Intelligence student with a deep passion for building intelligent systems 
          that solve real-world problems. My journey in AI started with curiosity about how machines learn, 
          and it has evolved into hands-on experience with deep learning, computer vision, and natural 
          language processing.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Beyond AI, I enjoy full-stack web development, creating polished user experiences, and exploring 
          the intersection of design and technology. I'm always seeking internship opportunities where I 
          can apply my skills and grow as a developer.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Projects", value: "10+" },
            { label: "Certifications", value: "5+" },
            { label: "Languages", value: "Python, JS" },
            { label: "Focus", value: "AI/ML" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary rounded-lg p-4 text-center">
              <div className="font-display font-bold text-lg gradient-text">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
