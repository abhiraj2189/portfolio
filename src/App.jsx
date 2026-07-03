import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/ui/Loader";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import GithubStats from "./components/sections/GithubStats";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <GithubStats />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;