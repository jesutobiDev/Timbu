import React from 'react';
import Hero from "../assets/images/hero.svg"

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#242008] w-full h-full p-10 z-50">
      <div className="relative text-center">
        <div className="preloader-text font-black text-[96px] md:text-[240px] lg:text-[370px]">Timbu</div>
      </div>
    </div>
  );
};

export default Preloader;
