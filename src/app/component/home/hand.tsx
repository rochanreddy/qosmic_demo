"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";

import { useInView } from "framer-motion";
import aeroplane_malkaine from "../../../../public/home/home_service.webp";
import mob_aeroplane_malkaine from "../../../../public/home/mob_home_service.webp";
import hand_middle from "../../../../public/home/hand_middle.webp";
import imag1 from "../../../../public/home/1.png";
import imag2 from "../../../../public/home/2.webp";
import imag3 from "../../../../public/home/3.webp";
import imag4 from "../../../../public/home/4.webp";
import imag5 from "../../../../public/home/5.webp";
import imag6 from "../../../../public/home/6.webp";
import imag7 from "../../../../public/home/7.webp";
import imag8 from "../../../../public/home/8.webp";
import imag9 from "../../../../public/home/9.webp";
import imag10 from "../../../../public/home/10.webp";
import imag11 from "../../../../public/home/11.webp";
import { useState, useEffect } from "react";
import Link from "next/link";
import bg_img from "../../../../public/home/hand_bg.webp";
import mob_bg_img from "../../../../public/home/mob_hand_bg.webp";
// import { useInView } from "react-cool-inview";

const Hands = (props: any) => {
  const [active, setactive] = useState(2);
  const [go, setgo] = useState("0vw");

  const ref = useRef(null);
  const outref = useRef(null);

  const [c_logo, setc_logo] = useState([
    {
      name: "Dezyn IQ",
      link: "#",
      class: "home_edge",
      bg: "home_black_bg",
      top: "0px",
      left: "52.2vw",
      right: "0px",
      h: "",
    },
    {
      name: "Surya Polymers",
      class: "home_edge",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "0px",
      right: "0px",
    },
    {
      name: "See Beyond",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "11.6vw",
      right: "0px",
    },
    {
      name: "Client X",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "23.2vw",
      right: "0px",
    },
    {
      name: "Client Y",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      name: "Client Z",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      name: "Company A",
      link: "#",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "58vw",
      right: "0px",
    },
    {
      name: "Company B",
      link: "#",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      name: "Company C",
      link: "#",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      name: "Company D",
      link: "#",
      class: "home_edge",
      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "0px",
    },
    {
      name: "Company E",
      link: "#",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "11.8vw",
    },
  ]);

  const [mobile2, setmobile2] = useState([
    {
      name: "Client Z",
      link: "#",

      bg: "home_black_bg",
      top: "0px",
      left: "0",
      right: "0px",
    },
    {
      name: "Dezyn IQ",
      bg: "home_black_bg",
      link: "#",

      class: "home_edge",
      top: "0px",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      name: "Company A",
      link: "#",

      bg: "home_black_bg",
      top: "0px",
      left: "",
      right: "0px",
    },
    {
      name: "Company E",
      link: "#",

      bg: "home_black_bg",
      top: "38vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      name: "Company D",
      class: "home_edge",
      link: "#",

      bg: "home_black_bg",
      top: "38vw",
      left: "0px",
      right: "",
    },
  ]);
  const [mobile1, setmobile1] = useState([
    {
      name: "Surya Polymers",
      class: "home_edge",
      link: "#",

      bg: "home_black_bg",
      top: "0px",
      left: "0",
      right: "0px",
    },
    {
      name: "See Beyond",
      bg: "home_black_bg",
      link: "#",

      top: "0px",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      name: "Client X",
      bg: "home_black_bg",
      link: "#",

      top: "0px",
      left: "",
      right: "0px",
    },
    {
      name: "Company B",
      bg: "home_black_bg",
      link: "#",

      top: "38vw",
      left: "0px",
      right: "",
    },
    {
      name: "Client Y",
      bg: "home_black_bg",
      top: "38vw",
      link: "#",

      left: "50%",
      right: "0px",
      translate: "-50%",
    },

    {
      name: "Company C",
      bg: "home_black_bg",
      link: "#",

      top: "38vw",
      left: "",
      right: "0px",
    },
  ]);

  //
  //

  return (
    <>
      <div
        className="w-full  p_r  pt-[6vw] pb-[8vw] sm:py-[15vw] h-auto"
        ref={ref}
      >
        <div className="w-full h-[55vw] sm:h-auto  relative flex flex-col gap-[4vw] sm:gap-[12vw]">
          <div className="flex z-[2] flex-col text-white nova text-[2.7vw] sm:text-[6vw]">
            <p className="font-[700] ">WHO WE</p>
            <p className=" px-[4.7vw] sm:px-[10vw]  italic font-light">
              WORK WITH
            </p>
          </div>

          <div className="w-full h-auto  flex flex-col gap-[0.2vw] sm:gap-[2vw]">
            <div className="flex">
              <div className="w-[4vw] "></div>
              {/* <p className="text-[#737373]  sm:px-[5vw] sm:text-[4vw] capitalize">
                Our top 12 logo designs
              </p> */}
            </div>
            <div className="flex text-white sm:gap-[5vw] sm:pb-[10vw]">
              <div className="w-[4vw] h-full  text-[red] font-[900] text-[2.7vw] justify-center flex">
                <Image
                  priority
                  src={add_logo}
                  alt="start logo"
                  className=" w-[1.3vw] sm:w-[12vw] h-fit "
                />
              </div>
              <p className="nova text-[1vw] font-medium sm:text-[4vw]">
                {"We're"} honored to be trusted by people <br /> with high
                standards.
              </p>
            </div>
          </div>
          <div className="sm:hidden w-full h-[86.9vw] relative">
            {/* this is the middle div */}
            <div
              className="w-[50vw] absolute left-[10vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>

            {/* this is for the long and short dive that connect below */}
            <div
              className="w-[50vw] absolute left-[40vw] top-[28.55vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the first line out of the tow that exist on the divs */}
            <div
              className="h-[10vw] absolute left-[40.15vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the second div */}
            <div
              className="h-[10vw] absolute left-[51.75vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the first bent line  div */}
            <div
              className="h-[10vw] absolute left-[56vw] top-[4.8vw]"
              style={{
                border: "1px solid grey",
                borderStyle: "dashed",
                rotate: "30deg",
              }}
            ></div>
            {/* this is the second bent line  div */}
            <div
              className="h-[30vw] absolute left-[69vw] top-[5.8vw]"
              style={{
                border: "1px solid grey",
                borderStyle: "dashed",
                rotate: "-40deg",
              }}
            ></div>
            {/* tomorrow i would work on this  */}
            {c_logo.map((e: any, index: any) => {
              return (
                <Link
                  href={e.link}
                  target="_blank"
                  key={index}
                  className={`w-[10.7vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center  h-[10.7vw] absolute rounded-[100%] py-[1vw] px-[1.4vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                  style={{
                    top: e.top,
                    right: e.right,
                    left: e.left,
                  }}
                >
                  <span className="text-white text-center font-bold text-[1.1vw] nova">
                    {e.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="w-full  hidden sm:block relative h-[100vw] ">
            <div className="w-full h-[13vw] flex justify-center absolute bottom-[6vw] left-0">
              <div className="w-[32vw]  flex justify-center gap-[4vw]">
                <div
                  className=" rounded-[100%] transition duration-[1s] flex cursor-pointer  justify-center items-center  w-[13vw] h-full"
                  style={{
                    border: `0.25vw solid ${active == 1 ? "white" : "#4C4C4C"}`,
                    color: active == 1 ? "white" : "#4C4C4C",
                  }}
                  onClick={() => {
                    setactive(2);
                    if (active == 1) {
                      setgo("0vw");
                    }
                  }}
                >
                  <i className="bi bi-arrow-left text-[5vw]"></i>
                </div>
                <div
                  className=" rounded-[100%] transition duration-[1s] flex  cursor-pointer justify-center items-center  w-[13vw] h-full"
                  style={{
                    border: `0.25vw solid ${active == 2 ? "white" : "#4C4C4C"}`,
                    color: active == 2 ? "white" : "#4C4C4C",
                  }}
                  onClick={() => {
                    setactive(1);
                    if (active == 2) {
                      setgo("-107.5vw");
                    }
                  }}
                >
                  <i className="bi bi-arrow-right text-[5vw]"></i>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-auto transisition duration-[1.5s]  "
              style={{
                transform: `translateX(${go})`,
              }}
            >
              <div className="w-[200vw] gap-[15vw] flex absolute top-0 left-0 ">
                <div className="w-full h-[70vw] flex justify-start gap-[5.1vw] flex-wrap ">
                  {mobile1.map((e: any, index: any) => {
                    return (
                      <Link
                        href={e.link}
                        target="_blank"
                        key={index}
                        className={`w-[27vw] h-[27vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center    rounded-[100%] px-[3vw] py-[3vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                      >
                        <span className="text-white text-center font-bold text-[3vw] nova">
                          {e.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="w-full h-[70vw] flex justify-start gap-[5.1vw] items-start flex-wrap ">
                  {mobile2.map((e: any, index: any) => {
                    return (
                      <Link
                        href={e.link}
                        target="_blank"
                        key={index}
                        className={`w-[27vw] h-[27vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center    rounded-[100%] px-[3vw] py-[3vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                      >
                        <span className="text-white text-center font-bold text-[3vw] nova">
                          {e.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo is foound up  */}

      {/*  */}

      {/*  */}

      {/*  */}
      <div
        className="w-full h-[140vw] sm:h-[290vw] relative flex overflow-clip "
        style={{ alignItems: "flex-start" }}
      >
        {/* hand bg */}
        <Image
          src={bg_img}
          priority
          alt="hand_bg"
          className=" absolute top-0 left-0 w-full h-[138vw] sm:hidden"
        />
        <Image
          src={mob_bg_img}
          priority
          alt="hand_bg"
          className=" absolute top-0 left-0 w-full h-[280vw] hidden sm:block"
        />
        <div
          className="flex  justify-center bottom-[-3.33vw]  w-fit items-center h-auto translate-x-[-50%]  sm:translate-x-[-0vw]  "
          style={{
            position: "sticky",
            left: "50%",
            alignSelf: "flex-end",
          }}
        >
          <Image
            priority
            src={hand_middle}
            alt="work image"
            className=" w-[45vw] sm:w-[100vw] h-fit  transition delay-[2s]"
          />
        </div>
      </div>


    </>
  );
};

export default Hands;
