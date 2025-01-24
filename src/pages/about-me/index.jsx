import { Header50 } from "./components/Header50";
import { Layout241 } from "./components/Layout241";
import { Layout4 } from "./components/Layout4";
import { Gallery14 } from "./components/Gallery14";
import MetaTags from "../../components/MetaTags";

export default function AboutMe() {
  return (
    <div>
      <MetaTags
        title="Conoce a la Dra. Yuleima Pérez | Ginecóloga y Obstetra en Barquisimeto"
        description="Aprende más sobre la Dra. Yuleima Pérez, especialista en ginecología y obstetricia, con amplia experiencia y un enfoque cálido y personalizado en el cuidado de la salud femenina."
        image=""
        name="ArLa"
      />
      <Header50 />
      <Layout241 />
      <Layout4 />
      <Gallery14 />
    </div>
  );
}
