import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12 relative">
      <div className="container mx-auto max-w-5xl relative flex items-center justify-center">
        
        {/* Center Content */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            Vishal <span className="text-primary">Portfolio</span>
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Vishal Singh. All rights reserved.
          </p>
        </div>

        {/* Scroll Top Button - Right Fixed */}
        <a
          href="#hero"
          className="absolute right-0 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};