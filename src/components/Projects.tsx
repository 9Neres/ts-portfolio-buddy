import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PicPay simplificado",
      description: "PicPay simplificado em Java, utilizando REST para as requisições. O sistema deve implementar regras de negócio com dois tipos de usuários diferentes, cada um com comportamentos distintos em relação aos métodos de pagamento.",
      image: "/api/placeholder/400/250",
      technologies: ["Back-end","Java", "SpringBoot", "H2 database", "API Rest", "Insomnia", "Json"],
      githubUrl: "https://github.com/9Neres/Challenger-PicPay",
      liveUrl: "https://github.com/9Neres/Challenger-PicPay",
      stars: 1,
      forks: 0
    },
    {
      id: 2,
      title: "Spotify",
      description: "Este é um projeto simples no qual coloquei em prática algumas animações em CSS, com o objetivo de aprimorar minhas habilidades como programador. Além disso, utilizei alguns comandos do NPM para configurar um JSON Server, simulando uma API simples que pude integrar ao front-end.",
      image: "/api/placeholder/400/250",
      technologies: ["Front-end","JavaScript", "Css", "Html", "Node.js", "Json", "API Json"],
      githubUrl: "https://github.com/9Neres/Spotify-web",
      liveUrl: "https://github.com/9Neres/Spotify-web",
      stars: 2,
      forks: 0
    },
    {
      id: 3,
      title: "Cardapio restaurante - Back End",
      description: "Este é um projeto de um sistema de cardápio digital com front-end e back-end. No front-end, o usuário pode visualizar os pratos, preços e categorias. No back-end, é possível cadastrar, editar e gerenciar os itens do cardápio por meio de uma API simples.",
      image: "/api/placeholder/400/250", 
      technologies: ["Back-end","Java", "SpringBoot","PostgreSQL", "Maven", "Postman"],
      githubUrl: "https://github.com/9Neres/Back-end...ProjectCardapio",
      liveUrl: "https://github.com/9Neres/Back-end...ProjectCardapio",
      stars: 1,
      forks: 0
    },
    {
      id: 4,
      title: "Cardapio restaurante - Front End",
      description: "Este é um projeto de um sistema de cardápio digital com front-end e back-end. No front-end, o usuário pode visualizar os pratos, preços e categorias. No back-end, é possível cadastrar, editar e gerenciar os itens do cardápio por meio de uma API simples.",
      image: "/api/placeholder/400/250", 
      technologies: ["Front-end","TypeScript", "React","Vite", "Html", "Css"],
      githubUrl: "https://github.com/9Neres/Front-end...ProjectCardapio",
      liveUrl: "https://github.com/9Neres/Front-end...ProjectCardapio",
      stars: 1,
      forks: 0
    },
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