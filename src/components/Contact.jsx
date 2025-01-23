
import { BsDiscord, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="mt-20 min-h-96 w-screen bg-gradient-to-b from-black via-black to-purple-900 ">
      <div className="relative rounded-lg  py-24 text-blue-50 sm:overflow-hidden">
      

        <div className="flex flex-row items-center justify-center gap-5 text-center">
         
          <p className="text-xl">Still Got Questions</p>
          <a href="mailto:tcet.hackanova@gmail.com?subject=Hackanova%20Queries%20">

          <Button title="contact us" containerClass=" cursor-pointer" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center mt-10" >
         <AnimatedTitle title="Hackanova 4.0" />
         
        </div>
        <div className="gap-5 flex justify-center">
          <a href="https://www.instagram.com/tsdw_tcet?igsh=eXN1NDdyNjd5cG8z">
          <BsInstagram className="text-2xl text-white"  />
          </a>
          <a target="blank" href="https://www.youtube.com/@tcet_tsdw" >
          <BsYoutube className="text-2xl text-white" />
          
          </a>
          <a href="https://t.me/+T-xYOtvS4IwwY2U9">
          <BsTelegram className="text-2xl text-white"  />
        
          </a>
          </div>
      </div>
      <footer className="w-screen  py-4 text-white bg-transparent">
      
        <div className="text-center gap-4  md:justify-start">
        © 2025 All rights reserved | Made with ❤ by the Hackanova Team
        </div>

      
    </footer>
    </div>
  );
};

export default Contact;
