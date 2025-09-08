import { Github, Linkedin, Mail, Code, Cpu, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-portfolio-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-portfolio-darker to-portfolio-dark"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-text mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-portfolio-text via-portfolio-text to-portfolio-green bg-clip-text text-transparent">
              Ricardo Neres
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-green font-medium mb-8">
            Desenvolvedor Back-End
          </h2>

          <p className="text-lg md:text-xl text-portfolio-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-portfolio-green/90 hover:bg-portfolio-green text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-portfolio-green/20"
            >
              Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-green/30 bg-portfolio-card/50 backdrop-blur-sm text-portfolio-text hover:bg-portfolio-green/20 hover:border-portfolio-green font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/9Neres"
              className="w-14 h-14 bg-portfolio-card/60 backdrop-blur-sm hover:bg-portfolio-card border border-portfolio-green/20 hover:border-portfolio-green/40 rounded-2xl flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/9neres"
              className="w-14 h-14 bg-portfolio-card/60 backdrop-blur-sm hover:bg-portfolio-card border border-portfolio-green/20 hover:border-portfolio-green/40 rounded-2xl flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/9.neres"
              className="w-14 h-14 bg-portfolio-card/60 backdrop-blur-sm hover:bg-portfolio-card border border-portfolio-green/20 hover:border-portfolio-green/40 rounded-2xl flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://x.com/9Picon"
              className="w-14 h-14 bg-portfolio-card/60 backdrop-blur-sm hover:bg-portfolio-card border border-portfolio-green/20 hover:border-portfolio-green/40 rounded-2xl flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;