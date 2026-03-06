export default function About() {
  return (
    <section
      id="about"
      className="h-[400px] w-full max-w-5xl flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-6xl font-bold mb-6">Sobre mí</h2>

      <p className="max-w-xl text-lg md:text-xl lg:text-2xl leading-relaxed">
        Soy desarrollador de aplicaciones multiplataforma apasionado por el
        desarrollo web y móvil. Me gusta crear aplicaciones modernas,
        eficientes y con buen diseño utilizando tecnologías como React,
        TypeScript y Node.js.
      </p>

      <a
        href="Daniel_Gonzalez.pdf"
        download
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded shadow-md 
                   hover:shadow-[0_0_20px_#3b82f6] 
                   hover:scale-105
                   transition-shadow duration-300"
      >
        Descargar CV
      </a>
    </section>
  );
}