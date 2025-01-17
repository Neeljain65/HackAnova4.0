import About from "./components/About";

import NavBar from "./components/Navbar";
import Features from "./components/Features";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TimelineDemo } from "./components/TimeLine";
import { CanvasRevealEffectDemo } from "./components/Prizes";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <NavBar />
      
      <About />
      {/* <CardGallery /> */}
      <TimelineDemo/>
      <CanvasRevealEffectDemo/>
      
      <Features />
      
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
