import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
  import { motion } from "framer-motion";
import AnimatedTitle, { SAnimatedTitle } from "./AnimatedTitle";

import CardGallery from "./Bento";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Rotate the rings
    gsap.to(".planet-rings", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div id="about" className=" w-screen">
     
        <div className="z- mb-12 mt-36 flex flex-col items-center gap-5  ">
       {/* <div className="z-10 before:bg-[radial-gradient(50%_100%,#8E24AA,transparent)] relative before:absolute before:inset-[-10%_-2%] before:-z-10 before:blur-3xl before:rounded-t-full"> */}
       <SAnimatedTitle
            title="18-19th J<b>A</b>NUARY 2025"
            containerClass="mt-5 !text-white   text-center"
          />
          <AnimatedTitle
            title="Hack<b>a</b>Nova 4.0"
            containerClass="mt-5 !text-white   text-center"
          />

       {/* </div> */}
     
        </div>
<CardGallery/>
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
     
    </div>
  );
};

export default About;
