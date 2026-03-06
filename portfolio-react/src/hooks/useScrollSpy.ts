import { useEffect } from "react";

export default function useScrollSpy(sectionIds: string[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cambia el hash en la URL sin recargar la página
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Ajusta cuándo considerar "visible"
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}