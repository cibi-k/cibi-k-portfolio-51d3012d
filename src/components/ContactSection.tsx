import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Mail, label: "Email", value: "cibi@example.com", href: "mailto:cibi@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cibik", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/cibik", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just UI
    alert("Thanks for reaching out! (Contact form is UI-only for now)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-secondary/30">
      <SectionTitle title="Get In Touch" subtitle="Let's connect and build something great" />
      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-bold mb-4">Let's Talk</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, internship opportunities, or collaborations in AI and web development.
          </p>
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">{s.value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full justify-center"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
