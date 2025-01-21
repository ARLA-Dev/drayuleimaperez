"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas
          </h2>
          <p className="md:text-md">
            Aquí respondemos algunas de las preguntas más frecuentes sobre
            nuestros servicios y horarios.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué horarios están disponibles?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Los horarios disponibles son lunes, miércoles y viernes, de 8:00
              am a 2:00 pm. Durante estos días, la Dra. Yuleima Pérez está lista
              para atenderte con la mejor atención. Te recomendamos agendar tu
              cita con anticipación.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué incluye una consulta?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Una consulta ginecológica incluye una evaluación completa de tu
              salud reproductiva. Se realizan exámenes físicos y se discuten tus
              inquietudes. Además, se te proporcionará información sobre
              prevención y cuidado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cómo preparo mi cita?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Para preparar tu cita, asegúrate de llevar cualquier documento
              médico relevante. También es útil anotar tus preguntas o
              preocupaciones. Esto ayudará a maximizar el tiempo de tu consulta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué servicios ofrecen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ofrecemos una variedad de servicios, incluyendo consultas
              ginecológicas, biopsias y ecografías. Cada servicio está diseñado
              para atender tus necesidades específicas. Consulta nuestra sección
              de servicios para más detalles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Dónde están ubicados?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nuestro consultorio está ubicado en Carrera 18, esquina Calle 23,
              Edif. Centro Empresarial, Piso 4, Oficina 4-7, Barquisimeto,
              Venezuela. Puedes encontrar un mapa interactivo en nuestra página
              de contacto. Estamos aquí para ayudarte.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Aún tienes preguntas?
          </h4>
          <p className="md:text-md">
            No dudes en contactarnos para más información.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contacto" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
