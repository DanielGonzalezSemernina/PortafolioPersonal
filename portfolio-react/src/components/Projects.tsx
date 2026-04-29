import mathRaceImg from "../assets/mathrace.jpg";
import portafolioImg from "../assets/portafolio.png";
import practicasImg from "../assets/practicasreact.jpg";
import plantillaImg from "../assets/plantillareact.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  website?: string; // opcional
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio personal",
      description: "Mi portfolio web desarrollado con React, Tailwind y TypeScript.",
      image: portafolioImg,
      technologies: ["React", "Tailwind", "TypeScript"],
      github: "https://github.com/DanielGonzalezSemernina/PortafolioPersonal",
    },
    {
      title: "MathRace",
      description: "Juego educativo de matemáticas para mejorar rapidez y precisión.",
      image: mathRaceImg,
      technologies: [
        "Python",
        "JavaScript",
        "Node.js",
        "Vue",
        "MySQL",
        "MongoDB",
        "Android Studio",
        "Sockets"
      ],
      github: "https://github.com/DanielGonzalezSemernina/mathrace",
    },
    {
      title: "Página prácticas escolares",
      description: "Página web realizada durante mis prácticas escolares en la empresa Data For Success",
      image: practicasImg,
      technologies: ["React", "JavaScript", "Styled Components"],
      github: "https://github.com/DanielGonzalezSemernina/practicasreact",
    },
    {
      title: "Plantilla React (i18n + Framer Motion)",
      description:
        "Plantilla moderna con React, animaciones con Framer Motion, JavaScript e internacionalización con i18n.",
      image: plantillaImg,
      technologies: ["React", "Framer Motion", "JavaScript", "i18n"],
      github: "https://github.com/DanielGonzalezSemernina/PlantillaReact",
      website: "https://danielgonzalezsemernina.github.io/PlantillaReact"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-12 px-4"
    >
      <h2 className="text-6xl font-bold mb-10">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col border-2 border-blue-600 rounded shadow-md overflow-hidden
                       hover:shadow-[0_0_20px_#3b82f6] hover:scale-105 transition-all duration-300"
          >
            {/* Imagen */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Línea separadora */}
            <div className="border-t border-gray-300"></div>

            {/* Contenido */}
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-3 mt-4 w-full">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded
                              hover:bg-gray-900 transition-all ${project.website ? "w-1/2" : "w-full"
                    }`}
                >
                  GitHub
                </a>

                {/* Web */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all w-1/2"
                  >
                    Ver Web
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}