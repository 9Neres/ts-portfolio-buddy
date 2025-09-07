import { Github, Linkedin, Mail, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-portfolio-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-portfolio-green to-portfolio-green-dark rounded-full flex items-center justify-center shadow-2xl">
                <div className="flex items-center space-x-1">
                  <Code className="w-8 h-8 text-portfolio-dark" />
                  <Cpu className="w-6 h-6 text-portfolio-dark" />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-portfolio-green to-portfolio-green-dark rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-text mb-4">
            <span className="bg-gradient-to-r from-portfolio-text to-portfolio-green bg-clip-text text-transparent">
              Seu Nome
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-green font-medium mb-8">
            Desenvolvedor Full Stack
          </h2>

          <p className="text-lg md:text-xl text-portfolio-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais. 
            Especializado em React, TypeScript e desenvolvimento de aplicações modernas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-portfolio-green hover:bg-portfolio-green-dark text-portfolio-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-portfolio-green/25"
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;