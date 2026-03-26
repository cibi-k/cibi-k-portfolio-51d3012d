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
        <div className="relative group">
          <div className="absolute -inset-4 rounded-2xl gradient-bg opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-700" />
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden neon-border shadow-2xl">
            <div className="relative group w-64 h-64 md:w-72 md:h-72 rounded-2xl 
  bg-secondary/20 backdrop-blur-md border border-white/10 
  shadow-xl flex flex-col items-center justify-center text-center p-6
  hover:scale-105 transition-all duration-300 ease-out">

  {/* Glow effect */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

  {/* Content */}
 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20
opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

{/* Floating Ring Effect */}
<div className="absolute w-40 h-40 border border-cyan-400/20 rounded-full
animate-pulse"></div>

{/* Content */}
<div className="relative z-10 space-y-2">

<p className="text-xl font-bold text-white">
AI & Tech Enthusiast
</p>

<p className="text-sm text-muted-foreground">
First-Year Undergraduate
</p>
<p className="text-sm text-muted-foreground">
Exploring Modern Technologies
</p>
<p className="text-sm text-muted-foreground">
Karpagam College of Engineering
</p>



<p className="text-sm text-cyan-500 mt-3 font-medium">
📍 Coimbatore, India
</p>

</div>

</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-2xl font-bold mb-4">Professional Overview</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I am an Information Technology student with a strong interest in problem solving and software development. Currently, I am focusing on learning Data Structures and Algorithms to improve my logical thinking and coding skills.

Along with DSA, I am exploring Artificial Intelligence concepts and modern web development. I enjoy building projects and continuously improving my technical skills to prepare for future software engineering roles.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
         Beyond AI, I enjoy Actively exploring in emerging technologies and scalable architectures.
          
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Tech stackes", value: "7+" },
             { label: "Focus", value: "DSA & AI" },
             { label: "Certifications", value: "5+" },
            { label: "Projects", value: "2+" },
           
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl p-4 text-center neon-border glow-card"
            >
              <div className="font-display font-bold text-lg gradient-text">{stat.value}</div>
              <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
