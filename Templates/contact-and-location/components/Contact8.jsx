"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Contacto</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Contáctanos
            </h2>
            <p className="md:text-md">
              Estamos aquí para ayudarte con tus consultas.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Nombre
              </Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Correo
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Mensaje
              </Label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje..."
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Acepto los Términos
              </Label>
            </div>
            <div>
              <Button title="Enviar">Enviar</Button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
            alt="Relume placeholder image"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
