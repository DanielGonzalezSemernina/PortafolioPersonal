import { FaLinkedin, FaGithub } from "react-icons/fa";

interface HeroProps {
  name: string;
  role: string;
}

export default function Hero({ name, role }: HeroProps) {
  return (
    <section
      id="inicio"
      className="h-[200px] w-full max-w-5xl flex flex-col justify-center items-center text-center gap-6"
    >
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="mt-2 text-xl text-gray-600">{role}</p>

    
      <div className="flex gap-4 mt-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/daniel-gonzalez-semernina-21454b268/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
        >
          <FaLinkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/DanielGonzalezSemernina"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-all"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}