import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
          <FileText size={28} className="text-primary-foreground" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Resume</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Download my resume to learn more about my experience, education, and skills.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          <Download size={18} /> Download Resume (PDF)
        </a>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
