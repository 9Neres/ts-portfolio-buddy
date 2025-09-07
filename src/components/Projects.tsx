import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com dashboard administrativo, pagamentos integrados e sistema de inventory.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 42,
      forks: 12
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 28,
      forks: 8
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard interativo de previsão do tempo com gráficos e mapas integrados.",
      image: "/api/placeholder/400/250", 
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 35,
      forks: 15
    },
    {
      id: 4,
      title: "Social Media API",
      description: "API RESTful para rede social com autenticação JWT, upload de imagens e sistema de followers.",
      image: "/api/placeholder/400/250",
      technologies: ["Express", "MongoDB", "JWT", "Cloudinary"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 19,
      forks: 6
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Site portfolio responsivo com animações suaves e design moderno.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 67,
      forks: 23
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Plataforma de ensino online com videos, quizzes e progresso do usuário.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Supabase", "Stripe", "Video.js"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 31,
      forks: 9
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Meus <span className="text-portfolio-green">Projetos</span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-portfolio-card border-portfolio-card hover:border-portfolio-green/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden group"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-portfolio-card-hover flex items-center justify-center">
                  <div className="text-portfolio-text-muted text-sm">
                    {project.title} Preview
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="flex items-center space-x-1 bg-portfolio-dark/80 rounded-full px-2 py-1">
                    <Star size={12} className="text-portfolio-green" />
                    <span className="text-xs text-portfolio-text">{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-portfolio-dark/80 rounded-full px-2 py-1">
                    <GitFork size={12} className="text-portfolio-green" />
                    <span className="text-xs text-portfolio-text">{project.forks}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-portfolio-green/10 text-portfolio-green text-xs rounded-md border border-portfolio-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-portfolio-green/50 text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-dark transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-portfolio-green hover:bg-portfolio-green-dark text-portfolio-dark transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;