"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">YOcurrioLaMagia</h2>
          <p className="text-sm italic">
            Equilibrio, energía y bienestar desde el alma.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Categorías</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#shop" className="hover:text-blue-300">
                Mis Productos
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-blue-300">
                Mis Servicios
              </a>
            </li>
            <li>
              <a href="#Commerc" className="hover:text-blue-300">
                Terpaias del MES
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Estos son mis contactos
          </h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a
              href="https://www.facebook.com/yamila.aranda2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/yocurriolamagia21/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5493571547250?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20terapias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
          <a
            href="mailto:yocurriolamagia@gmail.com"
            className="inline-block bg-pastelBrown text-white text-sm font-medium py-2 px-4 rounded hover:bg-pastelBrown-deeper transition duration-300"
          >
            Email: yocurriolamagia@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Terapias Holísticas. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
