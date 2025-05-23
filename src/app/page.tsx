"use client";

import './globals.css'
import Inicio from '@/components/Inicio/Inicio'
import Services from '@/components/Service/service'
import Commerc from '@/components/Commerc/commerc'
import Contact from '@/components/Contact/contact'
import PostPage from '@/components/PostPage/PostPage'
import Shop from "@/components/Shop/shop"


function App() {
  return (
    <div className="font-sans scroll-smooth bg-pastelBrown-base">
      <main>
        <section id="inicio"><Inicio /></section>
        <section id="servicios"><Services /></section>
        <section id="Commerc"><Commerc /></section>
        <section id="postPage"><PostPage /></section>
        <section id="shop"><Shop/></section>
        <section id="contact"><Contact /></section>
      </main>
      <a
        href="https://wa.me/5493571547250?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20terapias"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1536 1600"><path fill="currentColor" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26"/></svg>
      </a>
    </div>
  )
}

export default App