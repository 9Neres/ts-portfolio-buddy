import { GraduationCap, Calendar, MapPin, Award, Users, Mic } from "lucide-react";

const Education = () => {
  const activities = [
    {
      title: "Embaixador Universitário @DIO",
      subtitle: "Campus Expert #13",
      description: "Líder comunitário promovendo educação tecnológica"
    },
    {
      title: "Palestrante - Reactivando Community",
      subtitle: "Community For All",
      description: "Palestra sobre IA, IA Generativa, AGI, Super IA, Veo 3, deep learning e redes neurais artificiais"
    },
    {
      title: "Voluntário - Natal do Bem",
      subtitle: "OVG (Organização das Voluntárias de Goiás)",
      description: "Trabalho voluntário em ações sociais comunitárias"
    },
    {
      title: "Desenvolvedor Discord Oficial",
      subtitle: "Insígnia de Desenvolvedor Ativo",
      description: "Reconhecimento oficial da plataforma Discord por desenvolvimento de bots e automação"
    }
  ];

  const courses = [
    "Java Cloud Native - DIO / Bradesco",
    "Imersões Alura em Tecnologia e Programação + Google Gemini + Spotify",
    "Google Data Analytics Professional Certificate",
    "Build With AI - Google Developer Groups",
    "CC50 Harvard Computer Science in Brazil - Fundação Estudar",
    "6º Ideathon GO HUB - Edição Innovation Grid",
    "Escola Saga GO - Curso de Design, Multimídia e Criação de jogos (2018-2020)"
  ];

  return (
    <section id="educacao" className="py-20 bg-portfolio-darker relative">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark/50 to-portfolio-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4 tracking-tight">
            Educação & 
            <span className="text-portfolio-green"> Atividades</span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Formação acadêmica, mentorias e projetos complementares
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <div className="bg-portfolio-card/60 backdrop-blur-sm rounded-2xl p-8 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-portfolio-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-portfolio-text mb-2">
                    Bacharelado em Sistemas de Informação
                  </h3>
                  <div className="flex items-center space-x-2 text-portfolio-green mb-2">
                    <span className="font-semibold">FASAM - Universidade Sul da América</span>
                  </div>
                  <div className="flex items-center space-x-4 text-portfolio-text-muted mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>Goiânia, Brasil</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>01/2024 - 12/2027 (Cursando)</span>
                    </div>
                  </div>
                  <p className="text-portfolio-text-muted">
                    Formação focada em desenvolvimento de sistemas, programação, banco de dados e gestão de projetos tecnológicos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-portfolio-text mb-8 text-center">
              Mentorias & <span className="text-portfolio-green">Atividades Extras</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className="bg-portfolio-card/60 backdrop-blur-sm rounded-2xl p-6 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards"
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-portfolio-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {activity.title.includes('Embaixador') && <Users className="w-5 h-5 text-portfolio-green" />}
                      {activity.title.includes('Palestrante') && <Mic className="w-5 h-5 text-portfolio-green" />}
                      {activity.title.includes('Voluntário') && <Award className="w-5 h-5 text-portfolio-green" />}
                      {activity.title.includes('Desenvolvedor') && <Award className="w-5 h-5 text-portfolio-green" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-portfolio-text mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-portfolio-green text-sm font-medium mb-2">
                        {activity.subtitle}
                      </p>
                      <p className="text-portfolio-text-muted text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-text mb-8 text-center">
              Cursos <span className="text-portfolio-green">Complementares</span>
            </h3>
            <div className="bg-portfolio-card/60 backdrop-blur-sm rounded-2xl p-8 border border-portfolio-green/20">
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={course}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-portfolio-green/10 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-portfolio-text-muted text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default Education;