import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      skills: ["Java", "Spring Boot", "JPA", "Hibernate", "JavaScript", "TypeScript", "React", "HTML5", "CSS3"]
    },
    {
      title: "Banco de Dados & APIs", 
      skills: ["SQL", "NoSQL", "PostgreSQL", "Toad for Oracle", "DBeaver", "REST APIs", "Maven"]
    },
    {
      title: "DevOps & Ferramentas",
      skills: ["Git", "GitHub", "Docker", "Jenkins", "Insomnia", "Postman", "Jira", "Miro"]
    },
    {
      title: "Design & Produtividade",
      skills: ["Figma", "Canvas", "Excel", "Word", "Sheets", "Docs", "Asana"]
    },
    {
      title: "Especialidades",
      skills: ["Backend", "Frontend", "Full-Stack", "Discord Bots", "Cloud Computing", "English A2", "Portuguese"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-portfolio-darker relative">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark/50 to-portfolio-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4 tracking-tight">
            Habilidades & 
            <span className="text-portfolio-green"> Tecnologias</span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Stack tecnológico e ferramentas utilizadas para desenvolvimento de soluções back-end robustas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-portfolio-card/60 backdrop-blur-sm hover:bg-portfolio-card/80 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-portfolio-green/20 hover:border-portfolio-green/40"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              <h3 className="text-xl font-semibold text-portfolio-green mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-portfolio-green/15 text-portfolio-text border-portfolio-green/30 hover:bg-portfolio-green/25 hover:border-portfolio-green/50 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
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

export default Skills;