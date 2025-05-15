"use client";

import CardComponents from "@/components/PostCard/postcard";
import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import escencia from "@/assets/terapia/escencia-mayo1.jpg";
import teterapia from "@/assets/terapia/terapia-te.jpg";

interface Servicio {
  title: string;
  description: string;
  date: string;
  read: string;
  image: string;
}

const capacitacion: Servicio[] = [
  {
    title: "Entrenamiento para elevar tu Esencia",
    description: "Descubre tu poder interno para comenzar a vivir la vida que quieres!",
    date: "Inicio: 14/05 Fin: 05/06",
    read: `☀ Entrenamiento para elevar tu Esencia ✨

Descubre tu poder interno para comenzar a vivir la vida que querés.

Este entrenamiento está diseñado para guiarte en un viaje de autodescubrimiento y crecimiento personal.

📆 Encuentros semanales con teoría + práctica + ejercicios interactivos  
🎥 ¡Clases grabadas para ver cuando vos quieras!  
🕗 Arrancamos: Miércoles 14/05 - 20:30 hs  
⏱ Duración: 1 hora  
💻 100% virtual  

❗ Aún quedan cupos disponibles ❗`,
    image: escencia.src,
  },
  {
    title: "Day tea Party",
    description: "El Té y la calma.",
    date: "Inicio: 23/05 - 14:00",
    read: `La terapia usa la energía del té para equilibrar nuestra energía vital, combinando técnicas de la medicina tradicional china y la Ayurveda. El té, especialmente por su L-teanina, promueve claridad mental y creatividad, calmando al mismo tiempo el cuerpo, en contraste con los efectos del café. Es un enfoque natural para equilibrar el flujo vital.`,
    image: teterapia.src,
  },
];

export default function Commerc(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<Servicio | null>(null);

  const handleOpen = (serv: Servicio) => {
    setSelectedService(serv);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-pastelBrown-deeper">
          Terapias en Mayo
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5 flex flex-col justify-center text-pastelBrown-deeper">
          <h3 className="text-2xl font-semibold mb-4">Acompañame a ayudarte...</h3>
          <p className="text-lg mb-4">
            Sumate a una experiencia transformadora con mis cursos personalizados.
          </p>
          <p className="text-lg">
            Oferta especial válida durante todo mayo. ¡Cupos limitados!
          </p>
        </div>

        <div className="lg:w-3/5">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            modules={[Autoplay, Pagination]}
          >
            {capacitacion.map((serv, i) => (
              <SwiperSlide key={i} style={{ display: "flex", alignItems: "center" }}>
                <CardComponents
                  {...serv}
                  onReadMore={() => handleOpen(serv)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#e3cebe",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedService && (
            <>
              <Typography variant="h5" gutterBottom color="#6E5F57">
                {selectedService.title}
              </Typography>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography
                variant="body1"
                color="#6E5F57"
                style={{ whiteSpace: "pre-line" }}
              >
                {selectedService.read}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 3,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6E5F57",
                    "&:hover": { backgroundColor: "#A17C6B" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                  href={`https://wa.me/5493571547250?text=Hola! Estoy interesado en una terapia de ${selectedService.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57"
                    />
                    <path
                      fill="currentColor"
                      d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847"
                    />
                  </svg>
                  <span>Agendar</span>
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{
                    color: "#6E5F57",
                    borderColor: "#6E5F57",
                    "&:hover": {
                      backgroundColor: "#A17C6B",
                      color: "white",
                    },
                  }}
                >
                  Cerrar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
}


// import CardComponents from "@/components/PostCard/postcard";
// import * as React from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import escencia from "@/assets/terapia/escencia-mayo1.jpg";
// import teterapia from "@/assets/terapia/terapia-te.jpg";

// const capacitacion = [
//   {
//     title: "Entrenamiento para elevar tu Esencia",
//     description:
//       "Descubre tu poder interno para comenzar a vivir la vida que quieres!",
//     date: "Inicio: 14/05 Fin: 05/06",
//     read: `☀ Entrenamiento para elevar tu Esencia ✨

// Descubre tu poder interno para comenzar a vivir la vida que querés.

// Este entrenamiento está diseñado para guiarte en un viaje de autodescubrimiento y crecimiento personal.

// 📆 Encuentros semanales con teoría + práctica + ejercicios interactivos  
// 🎥 ¡Clases grabadas para ver cuando vos quieras!  
// 🕗 Arrancamos: Miércoles 14/05 - 20:30 hs  
// ⏱ Duración: 1 hora  
// 💻 100% virtual  

// ❗ Aún quedan cupos disponibles ❗`,
//     image: escencia.src,
//   },
//   {
//     title: "Day tea Party",
//     description: "El Te y la calma.",
//     date: "Inicio: 23/05 - 14:00 ",
//     read: `La terapia usa la energía del té para equilibrar nuestra energía vital, combinando técnicas de la medicina tradicional china y la Ayurveda. El té, especialmente por su L-teanina, promueve claridad mental y creatividad, calmando al mismo tiempo el cuerpo, en contraste con los efectos del café. Es un enfoque natural para equilibrar el flujo vital.`,
//     image: teterapia.src,
//   },
// ];

// export default function Commerc() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedService, setSelectedService] = React.useState(null);

//   const handleOpen = (serv) => {
//     setSelectedService(serv);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedService(null);
//   };

//   return (
//     <section className="py-12 px-4 sm:px-6">
//       {/* Título centrado */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-pastelBrown-deeper">
//           Terapias en Mayo
//         </h2>
//       </div>

//       {/* Contenedor de dos columnas */}
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
//         {/* Columna izquierda - Texto de promoción */}
//         <div className="lg:w-2/5 flex flex-col justify-center text-pastelBrown-deeper">
//           <h3 className="text-2xl font-semibold mb-4">
//             Acompañame a ayudarte...
//           </h3>
//           <p className="text-lg mb-4">
//             Sumate a una experiencia transformadora con mis cursos
//             personalizados.
//           </p>
//           <p className="text-lg">
//             Oferta especial válida durante todo mayo. ¡Cupos limitados!
//           </p>
//         </div>

//         {/* Columna derecha - Carrusel de spots vacíos */}
//         <div className="lg:w-3/5">
//           <Swiper
//             slidesPerView={2}
//             spaceBetween={10}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             centeredSlides={false}
//             autoplay={{
//               delay: 3500,
//               disableOnInteraction: true,
//             }}
//             modules={[Autoplay, Pagination]}
//           >
//             {" "}
//             {capacitacion.map((serv, i) => (
//               <SwiperSlide
//                 style={{ display: "flex", alignItems: "center" }}
//                 key={i}
//               >
//                 <CardComponents
//                   className="max-w-full"
//                   {...serv}
//                   onReadMore={() => handleOpen(serv)}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "#e3cebe",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           {selectedService && (
//             <>
//               <Typography variant="h5" gutterBottom color="#6E5F57">
//                 {selectedService.title}
//               </Typography>
//               <img
//                 src={selectedService.image}
//                 alt={selectedService.title}
//                 style={{
//                   width: "100%",
//                   borderRadius: "8px",
//                   marginBottom: "16px",
//                 }}
//               />
//               <Typography
//                 variant="body1"
//                 color="#6E5F57"
//                 style={{ whiteSpace: "pre-line" }}
//               >
//                 {selectedService.read}
//               </Typography>
//               {/* Podés agregar más info si querés */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: 2,
//                   mt: 3,
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#6E5F57",
//                     "&:hover": {
//                       backgroundColor: "#A17C6B",
//                     },
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1, // Espacio entre ícono y texto
//                   }}
//                   href={`https://wa.me/5493571547250?text=Hola! Estoy interesado en una terapia de ${selectedService.title}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1.8em"
//                     height="1.8em"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847"
//                     />
//                   </svg>
//                   <span>Agendar</span>
//                 </Button>
//                 <Button
//                   onClick={handleClose}
//                   variant="outlined"
//                   sx={{
//                     color: "#6E5F57",
//                     borderColor: "#6E5F57",
//                     "&:hover": {
//                       backgroundColor: "#A17C6B",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   Cerrar
//                 </Button>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </section>
//   );
// }
