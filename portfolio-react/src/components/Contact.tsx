export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[300px] w-full max-w-5xl flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-6xl font-bold mb-6">Contacto</h2>

      <p className="text-lg mb-2">
        Correo: <a className="text-blue-600 hover:underline">danielsemernina@gmail.com</a>
      </p>

      <p className="text-lg">
        Teléfono: <a className="text-blue-600 hover:underline">+34 658 25 17 46</a>
      </p>
    </section>
  );
}