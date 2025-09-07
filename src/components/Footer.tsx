import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Git", "Figma", "Next.js", "Tailwind CSS"
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-darker border-t border-portfolio-card">
      <div className="container mx-auto px-4 py-16">
        {/* Technologies Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-portfolio-text mb-8">
            Tecnologias que utilizo
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full text-portfolio-text-muted hover:text-portfolio-green transition-all duration-300 transform hover:scale-105 border border-portfolio-card hover:border-portfolio-green/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fadeInScale 0.5s ease-out forwards"
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-portfolio-text mb-4">
            Vamos trabalhar juntos?
          </h3>
          <p className="text-portfolio-text-muted mb-8 max-w-2xl mx-auto">
            Estou sempre interessado em novos projetos e oportunidades. 
            Entre em contato para discutirmos como posso ajudar seu próximo projeto.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:seu.email@exemplo.com"
              className="flex items-center space-x-2 px-6 py-3 bg-portfolio-green hover:bg-portfolio-green-dark text-portfolio-dark font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-portfolio-green/25"
            >
              <Mail size={20} />
              <span>Enviar Email</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-card-hover rounded-full flex items-center justify-center text-portfolio-text hover:text-portfolio-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-portfolio-card pt-8 text-center">
          <p className="text-portfolio-text-muted flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Desenvolvido com</span>
            <Heart size={16} className="text-portfolio-green animate-pulse" />
            <span>por Seu Nome</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;