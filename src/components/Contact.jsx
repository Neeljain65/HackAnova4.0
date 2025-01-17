
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { motion } from "framer-motion";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="mt-20 min-h-96 w-screen bg-gradient-to-b from-black via-black to-orange-900 ">
      <div className="relative rounded-lg  py-24 text-blue-50 sm:overflow-hidden">
      

        <div className="flex flex-row items-center justify-center gap-5 text-center">
         
          <p className="text-xl">Still Got Questions</p>
          <Button title="contact us" containerClass=" cursor-pointer" />
        </div>
        <div className="flex flex-col justify-center items-center mt-10" >
         <AnimatedTitle title="Hackanova 4.0" />
          <p className="text-center text-orange-500 text-lg mt-5">
          Imagine. Believe. Achieve!
          </p>
          <p className="text-center text-lg mt-5">TCET</p>
          <p className="text-center text-lg mt-5">
            Mumbai, India
          </p>
        </div>
      </div>
      <footer className="w-screen  py-4 text-white bg-transparent">
      <div className="container  flex flex-col justify-center gap-4 px-4 md:flex-row">
      

        <div className="flex justify-center text-center gap-4  md:justify-start">
        © 2024 All rights reserved | Made with ❤ by the Hackanova Team
        </div>

        
      </div>
    </footer>
    </div>
  );
};

export default Contact;
