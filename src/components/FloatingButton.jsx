// components/FloatingButton.js
import React from "react";
import { BsTelegram } from "react-icons/bs";

const FloatingButton = () => {
 

  return (
    <button
      
      className="fixed bottom-5 right-5 bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full shadow-2xl shadow-gray-500 flex justify-center items-center transition-transform transform hover:scale-110"
    >
    <a href="https://t.me/+T-xYOtvS4IwwY2U9">
    <BsTelegram className="text-2xl" />
    </a>
    </button>
  );
};

export default FloatingButton;
