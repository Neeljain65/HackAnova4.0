import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen  py-4 text-white bg-transparent">
      <div className="container  flex flex-col justify-center gap-4 px-4 md:flex-row">
      

        <div className="flex justify-center text-center gap-4  md:justify-start">
        © 2024 All rights reserved | Made with ❤ by the Hackanova Team
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
