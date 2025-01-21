"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Blog de la Dra. Yuleima
            </h1>
            <p className="md:text-md">
              Mantente informada sobre tu salud femenina.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              Ver todos
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Salud femenina
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Consejos de salud
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Noticias médicas
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Preguntas frecuentes
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Salud
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Importancia de la salud femenina
                  </h2>
                </a>
                <p>Explora temas relevantes para cuidar tu bienestar.</p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Consejos
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Cómo prepararte para una consulta
                  </h2>
                </a>
                <p>Consejos para una visita médica efectiva.</p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Salud
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Mitos sobre la salud femenina
                  </h2>
                </a>
                <p>
                  Desmitificando creencias comunes sobre la salud de la mujer.
                </p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Mitos
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Beneficios de la ecografía
                  </h2>
                </a>
                <p>Conoce cómo la ecografía puede ayudarte.</p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Ecografía
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Cuidado durante la menopausia
                  </h2>
                </a>
                <p>Consejos para manejar esta etapa de la vida.</p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-start border border-border-primary">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Menopausia
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Importancia de la citología
                  </h2>
                </a>
                <p>Descubre por qué es esencial para tu salud.</p>
                <Button
                  title="Leer más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Leer más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
