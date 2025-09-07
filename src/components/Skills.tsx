import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Linux"]
    },
    {
      title: "Certificações",
      skills: ["AWS Cloud Practitioner", "React Developer", "Full Stack Expert", "Agile Methodology"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Habilidades & 
            <span className="text-portfolio-green"> Certificações</span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-portfolio-card hover:bg-portfolio-card-hover rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-portfolio-card"
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
                    className="bg-portfolio-green/10 text-portfolio-green border-portfolio-green/20 hover:bg-portfolio-green/20 transition-colors duration-300"
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