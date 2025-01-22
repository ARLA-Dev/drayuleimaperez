"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Dirección:</p>
              <p className="mb-5 text-sm md:mb-6">
                Carrera 18, esquina Calle 23, Barquisimeto, Venezuela
              </p>
              <p className="mb-1 text-sm font-semibold">Contacto:</p>
              <a
                href="tel:1800 123 4567"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                (+58) 416-654-2059
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@drayuleimaperez.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Agendar Cita</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Servicios Médicos</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Sobre Mí</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Preguntas Frecuentes</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Galería</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Contacto</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Ubicación</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Horarios</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Política de Privacidad</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Términos de Servicio</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">
            © 2024 Dra. Yuleima Pérez. Todos los derechos reservados.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Política de Privacidad</a>
            </li>
            <li className="underline">
              <a href="#">Términos de Servicio</a>
            </li>
            <li className="underline">
              <a href="#">Configuración de Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
