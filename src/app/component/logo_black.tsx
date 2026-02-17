"use client ";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo_black.webp";
import mobile_logo from "../../../public/mobile_logo_black.webp";

const Logo_black = () => {
  return (
    <>
      <div className="w-auto h-auto flex items-center">
        <span className="text-black font-bold text-[2vw] sm:text-[6vw] tracking-wide">
          QOSMIC
        </span>
      </div>
    </>
  );
};

export default Logo_black;
