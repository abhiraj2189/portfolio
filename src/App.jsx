import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/ui/Loader";
import CustomCursor from "./components/ui/CustomCursor";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/sections/Footer";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const GithubStats = lazy(() => import("./components/sections/GithubStats"));
const Certifications = lazy(() =>
  import("./components/sections/Certifications")
);
const Contact = lazy(() => import("./components/sections/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const sections = {
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    github: <GithubStats />,
    certifications: <Certifications />,
    contact: <Contact />,
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />

          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <Hero
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <main className="bg-[#050816]">

            <Suspense
              fallback={
                <div className="h-[400px] flex items-center justify-center text-cyan-400 text-xl">
                  Loading...
                </div>
              }
            >
              <AnimatePresence mode="wait">

                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: .35,
                  }}
                >
                  {sections[activeTab]}
                </motion.div>

              </AnimatePresence>
            </Suspense>

          </main>

          <Footer />

        </>
      )}
    </>
  );
}