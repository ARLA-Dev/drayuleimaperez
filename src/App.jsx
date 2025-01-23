import AppRoutes from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <AppRoutes />
    <CTA />
    <Footer />
    </>
  );
}

export default App;