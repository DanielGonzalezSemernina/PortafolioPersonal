import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Skill {
  name: string;
  img: string; // solo el nombre del archivo en public/images/
  level: number; // nivel de 0 a 5, puede ser decimal
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", img: "react.png", level: 4 },
    { name: "TypeScript", img: "typescript.png", level: 3 },
    { name: "Java", img: "java.png", level: 4 },
    { name: "JavaScript", img: "javascript.png", level: 4 },
    { name: "HTML5", img: "html.png", level: 3 },
    { name: "CSS3", img: "css.png", level: 4.5 },
    { name: "Python", img: "python.png", level: 2.5 },
    { name: "Node.js", img: "nodejs.png", level: 4 },
    { name: "MongoDB", img: "mongodb.png", level: 3 },
    { name: "XML", img: "xml.png", level: 3 },
    { name: "Vuetify", img: "vuetify.png", level: 3.5 },
    { name: "GitHub", img: "github.png", level: 4.5 },
    { name: "MySQL", img: "sql.png", level: 3 },
    { name: "SQLite", img: "sqlite.png", level: 2.5 },
    { name: "Android", img: "android.png", level: 3 }
  ];

  const [animatedStars, setAnimatedStars] = useState<number[][]>([]);

  useEffect(() => {
    const initialStars = skills.map(() => Array(5).fill(0));
    setAnimatedStars(initialStars);

    skills.forEach((_skill, skillIndex) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setAnimatedStars((prev) => {
            const copy = prev.map((row) => [...row]);
            copy[skillIndex][i] = 1;
            return copy;
          });
        }, i * 150); // animación por estrella, todos los divs al mismo tiempo
      }
    });
  }, []);

  const renderStar = (skill: Skill, i: number, visible: boolean) => {
    if (!visible)
      return <FaRegStar key={i} className="text-gray-400 transition-all duration-300" />;
    if (skill.level >= i + 1)
      return <FaStar key={i} className="text-blue-600 transition-all duration-300" />;
    if (skill.level >= i + 0.5)
      return <FaStarHalfAlt key={i} className="text-blue-600 transition-all duration-300" />;
    return <FaRegStar key={i} className="text-gray-400 transition-all duration-300" />;
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-12 px-4"
    >
      <h2 className="text-6xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 border-2 border-blue-600 p-4 rounded shadow-md
                       hover:shadow-[0_0_20px_#3b82f6] hover:scale-105 transition-all duration-300"
          >
            {/* Imagen + Nombre */}
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/${skill.img}`}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-medium">{skill.name}</span>
            </div>

            {/* Estrellas animadas */}
            <div className="flex gap-1 mt-2">
              {[0, 1, 2, 3, 4].map((i) => renderStar(skill, i, animatedStars[skillIndex]?.[i] === 1))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}