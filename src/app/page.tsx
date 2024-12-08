import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer } from "@/components/footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <div id="home">
        <Hero />
      </div>
      <div id="about-us">
        <About/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
  </main>
  );
}
