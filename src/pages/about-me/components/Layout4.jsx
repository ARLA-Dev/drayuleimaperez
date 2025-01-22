"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Compromiso con la atención personalizada y cálida
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              En mi práctica, cada paciente es única y merece atención
              individualizada. Mi objetivo es crear un ambiente de confianza y
              confort para todas las mujeres.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Atención Personalizada
                </h6>
                <p>
                  Brindo un enfoque cálido y dedicado a cada consulta
                  ginecológica y obstétrica.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Compromiso Total
                </h6>
                <p>
                  Mi filosofía se basa en la dedicación y el respeto hacia cada
                  paciente.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Aprender" variant="secondary">
                Aprender
              </Button>
              <Button
                title="Contáctame"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contáctame
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
