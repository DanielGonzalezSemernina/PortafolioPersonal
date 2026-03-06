import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contacto" },
  ];

  useEffect(() => {
    // Inicializamos activeSection en inicio al cargar la página
    setActiveSection("inicio");

    // Manejo del scroll para sombra
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Scroll spy con rootMargin para altura del navbar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-100px 0px 0px 0px" } // 100px = altura navbar
    );

    links.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 100; // altura navbar
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });

      // Marca inmediatamente el enlace activo
      setActiveSection(targetId);

      // Actualiza la URL
      history.replaceState(null, "", `#${targetId}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full flex justify-center gap-8 p-4 z-50 transition-all duration-300
        bg-white text-black ${scrolled ? "shadow-lg" : "shadow-md"}`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={`relative text-lg font-medium px-2
            after:content-[''] after:block after:w-0 after:h-1.5
            after:rounded after:mt-2 after:transition-all after:duration-300
            hover:after:w-full
            ${
              activeSection === link.href.substring(1)
                ? "after:w-full after:bg-blue-600"
                : "after:bg-gray-300"
            }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}