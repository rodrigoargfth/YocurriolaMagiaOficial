"use client";

import { useRouter } from "next/navigation";
import { FC } from 'react';

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ScrollLink: FC<ScrollLinkProps> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/#${href}`);
    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Pequeño delay para asegurar la navegación
  };

  return (
    <a 
      href={`/#${href}`} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

// "use client";

// import { useRouter } from "next/navigation";

// export default function ScrollLink({ href, children }) {
//   const router = useRouter();

//   const handleClick = (e) => {
//     e.preventDefault();
//     router.push(`/#${href}`);
//     setTimeout(() => {
//       const element = document.getElementById(href);
//       if (element) element.scrollIntoView({ behavior: "smooth" });
//     }, 100); // Pequeño delay para asegurar la navegación
//   };

//   return <a href={`/#${href}`} onClick={handleClick}>{children}</a>;
// }