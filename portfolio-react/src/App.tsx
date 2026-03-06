import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import useScrollSpy from "./hooks/useScrollSpy";

function App() {
  useScrollSpy(["inicio", "about", "projects", "skills", "contact"]);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      <main className="pt-20 flex flex-col items-center gap-20">

        <Hero
          name="Daniel Gonzalez Semernina"
          role="Desarrollador de Aplicaciones Multiplataforma"
        />

        <About />

        <Projects />

        <Skills />

        <Contact />

      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;