import MetaTags from "../../components/MetaTags";
import { Header49 } from "./components/Header49";
import { Faq1 } from "./components/Faq1";
import { Faq1_1 } from "./components/Faq1_1";

export default function FAQ() {
  return (
    <div>
      <MetaTags
        title="Preguntas Frecuentes | Dra. Yuleima Pérez"
        description="Resuelve tus dudas sobre consultas ginecológicas, preparación para citas, horarios y más. La Dra. Yuleima Pérez responde las preguntas más comunes sobre la salud femenina."
        image=""
        name="ArLa"
      />
      <Header49 />
      <Faq1 />
      <Faq1_1 />
    </div>
  );
}
