import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Slider() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  // Array of image filenames or numbers
  const imageFiles = Array.from({  length: 10 }, (_, index) => `${index + 3}.webp`);

  return (
    <div className="w-full p-5 mt-5">
      <div className="flex items-center">
        <svg
          id="progress"
          className="relative rotate-[-90deg] w-24 h-24"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-current text-white opacity-50 fill-none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-current stroke-2 text-orange-400 fill-none"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <h1 className="text-white text-xl">Gallery</h1>
      </div>
      <ul
        ref={ref}
        className="flex overflow-x-scroll h-[300px] no-scrollbar px-5 py-5 mx-auto space-x-5"
      >
        {imageFiles.map((filename, index) => (
          <li
            key={index}
            className="flex-none w-[200px] h-full bg-white last:mr-0"
          >
            <img
              src={`/Carosel/${filename}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
