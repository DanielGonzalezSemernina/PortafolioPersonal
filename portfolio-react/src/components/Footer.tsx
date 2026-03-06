export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full py-8 flex flex-col items-center text-center gap-2">
      <p className="text-lg font-medium">Desarrollado por Daniel Gonzalez Semernina</p>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados</p>
    </footer>
  );
}