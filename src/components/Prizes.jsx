"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (<div id="prizes">
  <h1 className="text-white lg:mt-5 text-center lg:text-5xl text-4xl font-bold"><span className=" text-white">Prize Pool</span></h1>
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
      className="py-20 mt-5 mb-10 grid lg:grid-cols-[repeat(3,1fr)] *:aspect-square bg-[radial-gradient(circle,purple,transparent_35%)] bg-black w-full lg:gap-24 gap-12 max-w-screen-lg mx-auto lg:px-5 px-12">
      <Card  title="20000₹" icon={<AceternityIcon2 />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <MidCard  title="30000₹" icon={<AceternityIcon />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
        {/* Radial gradient for the cute fade */}
      </MidCard>
      <Card  title="10000₹" icon={<AceternityIcon3 />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]} />
      </Card>
    </motion.div>
  </ div>);
}

const Card = ({
  title,
  icon,
  children,
  height
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height }}
      className=" overflow-clip  bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-gray -600 to-black bg-black border-black/[0.2] group/canvas-card flex items-center justify-center rounded-xl   max-w-sm w-full mx-auto p-4 relative  ">
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute rounded-xl inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center text-2xl text-white  w-full  mx-auto flex items-center justify-center">
          {icon}  
        </div>
        
        <h2
          className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>)
  );
};
const MidCard = ({
  title,
  icon,
  children,
  height
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height }}
      className="border lg:scale-125 overflow-clip bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 bg-black border-black/[0.2] group/canvas-card flex items-center justify-center rounded-xl dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative  relative">
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>)
  );
};
const AceternityIcon = () => {
  return (
    (<img
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      src="/images/1.png"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 object-cover  text-black dark:text-white group-hover/canvas-card:text-white ">
      
    </img>)
  );
};
const AceternityIcon2 = () => {
  return (
    (<img
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      src="/images/2.png"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 object-cover  text-black dark:text-white group-hover/canvas-card:text-white ">
      
    </img>)
  );
};
const AceternityIcon3 = () => {
  return (
    (<img
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      src="/images/3.png"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 object-cover  text-black dark:text-white group-hover/canvas-card:text-white ">
      
    </img>)
  );
};
export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
