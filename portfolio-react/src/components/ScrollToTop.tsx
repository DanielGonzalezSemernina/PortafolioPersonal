import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // ícono de flecha (instala react-icons si no lo tienes)

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) { // aparecerá tras 200px de scroll
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // scroll suave
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 text-white shadow-lg 
                 transition-transform transition-opacity duration-300
                 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                 hover:bg-blue-700 hover:scale-110`}
    >
      <FaArrowUp />
    </button>
  );
}