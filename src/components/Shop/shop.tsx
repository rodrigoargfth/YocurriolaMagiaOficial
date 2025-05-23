"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

import agua from "@/assets/productos/aguaFlorida.jpg";
import sahumerios from "@/assets/productos/sahumerios.jpg";
import caña from "@/assets/productos/cana-con-ruda.jpg";
import velas from "@/assets/productos/pexels-vlada-karpovich-6755627.jpg";
import hierbas from "@/assets/productos/pexels-anna-pou-8330041.jpg";
import spray from "@/assets/productos/pexels-anntarazevich-6486620.jpg";

const productos = [
  {
    nombre: "Agua Florida",
    image: agua.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
  {
    nombre: "Sahumerios Artesanales",
    image: sahumerios.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
  {
    nombre: "Caña con ruda",
    image: caña.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
  {
    nombre: "Velas de soja",
    image: velas.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
  {
    nombre: "Spray Energizante",
    image: spray.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
  {
    nombre: "Té de Hierbas",
    image: hierbas.src,
    descripcion: "Es utilizada para limpiezas energéticas y espirituales.",
  },
];

type Product = {
  nombre: string;
  image: string;
  descripcion: string;
};

export default function Shop() {
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Product | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = (producto: Product) => {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setProductoSeleccionado(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pastelBrown-deeper mb-2">
          Productos que podés comprar
        </h2>
        <h5 className="text-xl text-pastelBrown-deeper">
          Solicitá tu pedido por WhatsApp
        </h5>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {productos.map((producto, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">
                <img
                  src={producto.image}
                  alt={producto.nombre}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4 flex justify-between items-center">
                  <p className="text-pastelBrown-deeper font-semibold text-base">
                    {producto.nombre}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => abrirModal(producto)}
                      className="text-blue-600 hover:text-blue-700"
                      title="Más información"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.6em"
                        height="1.6em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                        />
                      </svg>
                    </button>

                    <a
                      href={`https://wa.me/5493571547250?text=Hola!%20Quiero%20pedir%20${encodeURIComponent(
                        producto.nombre
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                      title="Whatsapp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.6em"
                        height="1.6em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57" />
                        <path d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {mostrarModal && productoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-4 shadow-xl max-w-sm w-full mx-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-pastelBrown-deeper">
                {productoSeleccionado.nombre}
              </h3>
              <button
                onClick={cerrarModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <img
              src={productoSeleccionado.image}
              alt={productoSeleccionado.nombre}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-2 text-sm text-gray-700">
              {productoSeleccionado.descripcion}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
