"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Citología</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Examen esencial para la salud femenina
            </h1>
            <p className="md:text-md">
              La citología es un procedimiento vital que permite detectar
              cambios celulares en el cuello uterino, ayudando en la prevención
              del cáncer. Este examen es rápido, indoloro y proporciona
              información crucial para el cuidado de la salud de la mujer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Agendar" variant="secondary">
                Agendar
              </Button>
              <Button
                title="Cita"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Cita
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
