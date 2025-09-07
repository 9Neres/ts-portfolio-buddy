import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-portfolio-dark relative">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-darker/30 to-portfolio-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4 tracking-tight">
            Experiência 
            <span className="text-portfolio-green"> Profissional</span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Histórico profissional e principais responsabilidades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-portfolio-card/60 backdrop-blur-sm rounded-2xl p-8 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-portfolio-text mb-2">
                  Estágio TI
                </h3>
                <div className="flex items-center space-x-2 text-portfolio-green mb-2">
                  <Building2 size={18} />
                  <span className="font-semibold">Máxima Tech</span>
                </div>
                <div className="flex items-center space-x-4 text-portfolio-text-muted">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>Goiânia, Brasil</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>04/2024 - 09/2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-portfolio-green mb-4">Principais Responsabilidades:</h4>
              <ul className="space-y-3 text-portfolio-text-muted">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Realização de consultas SQL no Toad for Oracle para inserção, atualização e edição de informações no banco de dados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Utilização do Jira para gestão de demandas e acompanhamento de backlogs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Desenvolvimento de servidor Discord e criação de bots automatizados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Uso do Asana para documentação e organização das atividades da equipe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-portfolio-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Operação do Jenkins para manutenção de ambientes em nuvem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;