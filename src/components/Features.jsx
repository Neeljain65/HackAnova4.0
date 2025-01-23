import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Slider from "./Slider/Slider";
import { FaqTeachers } from "./faq.jsx";
import { faqs } from "../lib/data";
import { BentoGridItem } from "./ui/bento-grid.jsx";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src,dlink, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {/* <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      /> */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font bg-gradient-to-r from-orange-600 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text">{title}</h1>
          {description && (
            <p className="mt-3 max-w-72 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla mt-3 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-white" />
            <a className="text-white" href={dlink} target="_blank" >
              <p className="relative z-20 ">Visit</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="mt-5">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-center text-3xl lg:text-4xl font-bold   text-blue-50">
         Meet Our <span className="bg-purple-800"> Sponsors</span>
        
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
        
        </p>
      </div>

   
      <div className="grid gap-4 w-full  md:gap-7 place-items-center">
  <BentoTilt className="bento-tilt_1 md:col-span-1">
    <BentoCard
      src="videos/feature-2.mp4"
      title={
        <>
          Devfoli<b>o</b>
        </>
      }
      dlink="https://devfolio.co/home/"
      description="Devfolio is a platform that helps people host and manage hackathons, and create online portfolios."
      isComingSoon
    />
  </BentoTilt>
</div>

    </div>
    <Slider/>
    <div className=" flex lg:mx-52 mt-24 mx-8">
    <div className="container z-10 relative before:absolute before:bg-gradient-to-b from-purple-600 via-purple-800 to-black  before:-inset-2 before:-z-10 before:blur-3xl before:round-[inherit]">
		
    <FaqTeachers faqs={faqs}/>
    
		</div>
    
    </div>
    <div className="p-2 lg:w-2/5 mx-auto mt-24">
    <h1 className="text-5xl text-white font-bold text-center">Meet the Team</h1>
    <BentoGridItem 
    title="TSDW Technical Team"
    description="The TSDW Technical Team is the backbone of Hackanova, ensuring seamless execution with cutting-edge technologies and innovative solutions.
From setting up platforms to troubleshooting in real-time, the team fosters a collaborative environment for an exceptional hackathon experience."
     className={"mt-5"}
    header=
    {
      <img src="./images/a.jpeg" alt="" className="h-full object-cover object-center aspect-auto-16/9" />
    }
    />
    </div>
  </section>
);

export default Features;
