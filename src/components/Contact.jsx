
import { BsDiscord, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import ContactSection from "./MailContact";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="mt-20 min-h-96 w-screen bg-gradient-to-b from-black via-black to-purple-950 ">
      <div className="relative rounded-lg  py-24 text-blue-50 sm:overflow-hidden">
      
        <div className="flex flex-col justify-center items-center mt-10" >
         <AnimatedTitle title="Hackanova 4.0" />
        </div>
        <ContactSection />
        
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
