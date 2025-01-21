"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas
          </h2>
          <p className="md:text-md">
            Aquí respondemos algunas de las preguntas más frecuentes sobre
            consultas ginecológicas.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué incluye una consulta?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Una consulta ginecológica incluye una evaluación completa de la
              salud reproductiva. Esto abarca exámenes físicos y, si es
              necesario, pruebas adicionales como citología y ecografía. El
              objetivo es garantizar un diagnóstico preciso y un tratamiento
              adecuado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cómo preparo mi cita?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Para preparar tu cita, es recomendable que traigas cualquier
              historial médico relevante. También, anota cualquier pregunta que
              desees hacerle a la doctora. Esto ayudará a que la consulta sea
              más efectiva.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué horarios están disponibles?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Las consultas están disponibles los lunes, miércoles y viernes de
              8:00 am a 2:00 pm. Es recomendable agendar tu cita con
              anticipación. Puedes hacerlo fácilmente a través del botón de
              'Agendar cita' en nuestra página.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué debo llevar?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Te sugerimos llevar tu documento de identificación y cualquier
              información médica relevante. Si has realizado exámenes recientes,
              también es útil traer esos resultados. Esto facilitará una
              evaluación más completa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Puedo llevar a alguien?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sí, puedes llevar a un acompañante si así lo prefieres. Esto puede
              brindarte mayor comodidad durante la consulta. Sin embargo, ten en
              cuenta que el espacio es limitado.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Aún tienes preguntas?
          </h4>
          <p className="md:text-md">Estamos aquí para ayudarte.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contactar" variant="secondary">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
