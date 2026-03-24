import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Cibi K. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Mail, href: "mailto:cibi@example.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
