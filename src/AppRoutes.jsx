import { Routes, Route } from "react-router";

import Home from "./pages/home";
import Services from "./pages/services";
import AboutMe from "./pages/about-me";
import FAQ from "./pages/faq";
import Blog from "./pages/blog";
import Post from "./pages/blog-post";
import Contact from "./pages/contact-and-location";
import Testimonios from "./pages/testimoniales";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/sobre-mi" element={<AboutMe />} />
      <Route path="/preguntas-frecuentes" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/testimonios" element={<Testimonios />} />
    </Routes>
  );
}

export default AppRoutes;
