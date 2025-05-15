"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { ScrollLink } from "@/components/ScrollLink/scrollLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el toggle del menú en móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#DCC5B3]/90 backdrop-blur-3xl shadow-md fixed top-0 left-0 w-full z-50 px-16 h-20 flex items-center justify-between">
      {/* Logo a la izquierda */}
      <h1 className="text-xl font-bold flex items-center gap-2 text-[#6E5F57]">
        <Icon
          icon="mingcute:lotus-line"
          width={40}
          height={40}
          className="drop-shadow-2xl"
        />
        YOcurrioLaMagia
      </h1>

      {/* Botón hamburguesa solo visible en móviles */}
      <button
        className="block lg:hidden text-[#6E5F57] focus:outline-none"
        onClick={toggleMenu}
      >
        <Icon icon="material-symbols:menu-rounded" width={30} />
      </button>

      {/* Menú */}
      <ul
        className={`lg:flex flex-col lg:flex-row lg:space-x-6 text-[#6E5F57] font-medium absolute lg:static top-full left-0 w-full bg-[#DCC5B3]/90 backdrop-blur-3xl lg:bg-transparent lg:backdrop-blur-none transition-transform ease-in-out duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:items-center lg:justify-end`}
      >
        <li className="flex items-center gap-1 hover:text-pastelBrown-dark">
          <Icon icon="material-symbols:home-rounded" width={20} />
          <ScrollLink href="inicio">Inicio</ScrollLink>
        </li>
        <li className="flex items-center gap-1 hover:text-pastelBrown-dark">
          <Icon icon="mdi:spa" width={20} />
          <ScrollLink href="servicios">Servicios</ScrollLink>
        </li>
        <li className="flex items-center gap-1 hover:text-pastelBrown-dark">
          <Icon icon="mdi:meditation" width={30} />
          <ScrollLink href="Commerc">Terapias</ScrollLink>
        </li>
        <li className="flex items-center gap-1 hover:text-pastelBrown-dark">
          <Icon icon="tabler:shopping-bag" width={20} />
          <ScrollLink href="shop">Shop</ScrollLink>
        </li>
        <li className="flex items-center gap-1 hover:text-pastelBrown-dark">
          <Icon icon="mdi:email-send" width={20} />
          <ScrollLink href="contact">Contacto</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
