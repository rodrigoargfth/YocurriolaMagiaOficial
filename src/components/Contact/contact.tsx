"use client";

import { useRef, FormEvent, JSX, RefObject } from "react";
import ScrollVelocity from "@/blocks/Components/ScrollVelocity/ScrollVelocity";

const Contact = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  const palabrasReiki: string[] = [
    "Reiki",
    "Energía",
    "Sanación",
    "Equilibrio",
    "Chakras",
    "Armonía",
    "Meditación",
    "Paz interior",
    "Conexión",
    "Luz",
    "Amor",
    "Espiritualidad",
  ];

  const textoUnico: string = palabrasReiki.join(" — ");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const nombre = (target.nombre as HTMLInputElement).value;
    const email = (target.email as HTMLInputElement).value;
    const mensaje = (target.mensaje as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:rodrifother@gmail.com?subject=Consulta%20de%20${encodeURIComponent(
      nombre
    )}&body=${encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className="h-auto bg-pastelBrown-light bg-center flex flex-col justify-center items-center text-black text-center pb-5"
      ref={scrollContainerRef}
    >
      <div className="max-w-md w-full px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4 mt-6 text-pastelBrown-dark">
          Estoy aquí para escucharte
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Conecta con tu bienestar interior a través de terapias holísticas y Reiki.
          Si deseas que me comunique contigo, deja tu mensaje con amor.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje o consulta"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pastelBrown-dark hover:bg-pastelBrown-deeper text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Enviar con intención
          </button>
        </form>
      </div>

      <div className="mt-10">
        <ScrollVelocity
          scrollContainerRef={scrollContainerRef}
          texts={[textoUnico]}
          velocity={50}
          className="text-pastelBrown-dark text-lg md:text-2xl"
          parallaxClassName="mb-5 w-full"
        />
        <ScrollVelocity
          scrollContainerRef={scrollContainerRef}
          texts={[textoUnico]}
          velocity={-50}
          className="text-pastelBrown-dark text-lg md:text-2xl"
          parallaxClassName="mb-5 w-full"
        />
      </div>
    </div>
  );
};

export default Contact;

// "use client";

// import { useRef } from "react";
// import ScrollVelocity from "@/blocks/Components/ScrollVelocity/ScrollVelocity";

// const Contact = () => {
//   const scrollContainerRef = useRef(null);

//   const palabrasReiki = [
//     "Reiki",
//     "Energía",
//     "Sanación",
//     "Equilibrio",
//     "Chakras",
//     "Armonía",
//     "Meditación",
//     "Paz interior",
//     "Conexión",
//     "Luz",
//     "Amor",
//     "Espiritualidad",
//   ];

//   const textoUnico = palabrasReiki.join(" — ");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nombre = e.target.nombre.value;
//     const email = e.target.email.value;
//     const mensaje = e.target.mensaje.value;

//     const mailtoLink = `mailto:rodrifother@gmail.com?subject=Consulta%20de%20${encodeURIComponent(nombre)}&body=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`)}`;

//     window.location.href = mailtoLink;
//   };

//   return (
//     <div
//       className="h-auto bg-pastelBrown-light bg-center flex flex-col justify-center items-center text-black text-center pb-5"
//       ref={scrollContainerRef}
//     >
//       <div className="max-w-md w-full px-4 sm:px-6">
//         <h2 className="text-3xl font-bold mb-4 mt-6 text-pastelBrown-dark">
//           Estoy aquí para escucharte
//         </h2>
//         <p className="text-lg mb-6 text-gray-700">
//           Conecta con tu bienestar interior a través de terapias holísticas y Reiki. 
//           Si deseas que me comunique contigo, deja tu mensaje con amor.
//         </p>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="nombre"
//             placeholder="Tu nombre completo"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Tu correo electrónico"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//           <textarea
//             name="mensaje"
//             placeholder="Tu mensaje o consulta"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             rows="4"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-pastelBrown-dark hover:bg-pastelBrown-deeper text-white py-2 px-6 rounded-lg transition duration-300"
//           >
//             Enviar con intención
//           </button>
//         </form>
//       </div>

//       <div className="mt-10">
//         <ScrollVelocity
//           scrollContainerRef={scrollContainerRef}
//           texts={[textoUnico]}
//           velocity={50}
//           className="text-pastelBrown-dark text-lg md:text-2xl"
//           parallaxClassName="mb-5 w-full"
//         />
//         <ScrollVelocity
//           scrollContainerRef={scrollContainerRef}
//           texts={[textoUnico]}
//           velocity={-50}
//           className="text-pastelBrown-dark text-lg md:text-2xl"
//           parallaxClassName="mb-5 w-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;