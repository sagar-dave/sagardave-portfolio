import About from "./components/About";
import AuraBackground from "./components/AuraBackground";
import Contact from "./components/Contact";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AuraBackground />
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;