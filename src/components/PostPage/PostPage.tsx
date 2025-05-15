"use client";

import { Icon } from "@iconify/react";

export default function HolisticBenefits() {
  const tips = [
    {
      icon: <Icon icon="mdi:meditation" width={150} className="w-22 h-22 text-orange-700"  />,
      title: "Clases en vivo",
      description: "Conectate con vos y potenciá tu día con sesiones guiadas.",
    },
    {
      icon: <Icon icon="game-icons:prayer" width={145} className="w-22 h-22 text-orange-700"/>,
      title: "A tu ritmo",
      description: "Clases grabadas para que practiques cuando quieras.",
    },
    {
      icon:<Icon icon="la:om" width={150} className="w-22 h-22 text-orange-700"/>,
      title: "Más de 10 disciplinas",
      description: "Combiná técnicas para mejorar tu bienestar integral.",
    },
    {
      icon: <Icon icon="healthicons:mobile" width={150} className="w-22 h-22 text-orange-700"/>,
      title: "Contenido semanal",
      description: "Recibí clases y guías nuevas todas las semanas.",
    },
  ];

  return (
    <section className="bg-pastelBrown-light py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-orange-700 mb-12">
        Conocé los beneficios de este entrenamiento
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-orange-700">
        {tips.map((tip, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {tip.icon}
            <h4 className="font-bold text-lg">{tip.title}</h4>
            <p className="text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
