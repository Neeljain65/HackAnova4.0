import React, { useState, useEffect } from "react";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import { TimelineDemo } from "./components/TimeLine";
import { CanvasRevealEffectDemo } from "./components/Prizes";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <NavBar />
      {isLoading ? <Loader /> : (
        <>
          <About />
          <TimelineDemo />
          <CanvasRevealEffectDemo />
          <Features />
          <Contact />
        </>
      )}
    </main>
  );
}

export default App;
