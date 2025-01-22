"use client";

import { Button } from "@relume_io/relume-ui";

export function CTA() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Agenda tu cita hoy mismo
          </h2>
          <p className="text-text-alternative md:text-md">
            Contáctanos para recibir la atención ginecológica que mereces, con
            calidez y profesionalismo.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Cita">Cita</Button>
            <Button title="WhatsApp" variant="secondary-alt">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
