import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;