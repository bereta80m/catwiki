"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { UseGlobal } from "../context/GlobalContext";
import Link from "next/link";
import {motion} from "framer-motion"

function FrontPage() {
  const { catsList, searchInput, setSearchInput, HandleSubmit, Filter } =
    UseGlobal();
  const [isFocus, setIsFocus] = useState(false);
  const [onSnapX, setOnSnapX] = useState(0);


  const HandleClose = () => {
    if (isFocus) {
      setIsFocus(false);
    }
  };
  useEffect(() => {
    const CloseWhenClick = (e) => {
      if (isFocus && e.target.classList.contains("OtherContent")) {
        HandleClose();
      }
    };
    window.addEventListener("click", CloseWhenClick);
    return () => {
      window.removeEventListener("click", CloseWhenClick);
    };
  }, [isFocus, HandleClose]);


  function handleClick() {
    const newStartSlice = onSnapX + 4
    if (newStartSlice >= catsList.length) {
      setOnSnapX(0)
    }
    else{
      setOnSnapX(newStartSlice)
    }
  }

  const slicedArray = catsList.slice(onSnapX, onSnapX + 4)

  return (
    <>
      <div className="grid grid-cols-2 lg:px-20 md:px-20 sm:px-10 xs:px-7 rounded-t-3xl  xxs:px-5  relative w-full bg-black  h-[40%] rounded-t-3xl">
      {isFocus && (
            <motion.ul className="lg:hidden md:hidden sm:hidden xs:flex xxs:flex absolute z-20 text-white   flex-col py-2 lg:w-72 md:w-72 sm:w-72 xs:w-full xxs:w-full  lg:h-44 sm:h-44 xs:h-[108vh] xxs:h-[108vh] bg-black rounded-3xl px-3 gap-3 overflow-hidden">
               <AiOutlineClose onClick={()=>HandleClose()} className="absolute cursor-pointer mx-5 right-0 text-white text-3xl" />

          <form
            onSubmit={HandleSubmit}
            className="flex relative border items-center mt-14 lg:w-72 rounded-full bg-white"
          >

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter your breed"
              className="w-full py-2 truncate rounded-full bg-transparent border-none outline-none lg:px-5 md:px-5 sm:px-5 xs:px-5 xxs:px-2"
              onFocus={() => setIsFocus(true)}
            />
            <AiOutlineSearch className="text-xl absolute right-0 mx-3" />
          </form>
              {Filter.map((item) => {
                return (
                  <Link
                    href={`/${item.id.toString()}`}
                    key={item.id}
                    className="hover:bg-[#f5f5f5] hover:text-black cursor-pointer py-3 rounded-xl px-2"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </motion.ul>
          )}
        <div className="flex flex-col gap-3 h-full w-full OtherContent py-12 z-10 ">
          <div className="bg-CatwikiLogoWhite bg-no-repeat  OtherContent lg:w-60 lg:h-20 md:w-60 md:h-20 sm:w-60 sm:h-20 xs:w-60 xs:h-16 xxs:w-44 xxs:h-16  bg-contain z-20" />
          <p className="text-white lg:text-xl md:text-xl  sm:text-lg xs:text-md xxs:text-md  lg:w-72 md:w-72 sm:w-62 xs:w-[15rem] xxs:w-[12rem] OtherContent">
            Get to know more about your cat breed
          </p>
          <form
            onSubmit={HandleSubmit}
            className="flex relative items-center lg:w-72 rounded-full bg-white"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter your breed"
              className="w-full py-2 truncate rounded-full bg-transparent border-none outline-none lg:px-5 md:px-5 sm:px-5 xs:px-5 xxs:px-2"
              onFocus={() => setIsFocus(true)}
            />
            <AiOutlineSearch className="text-xl absolute right-0 mx-3" />
          </form>
          {isFocus && (
            <ul className="lg:flex md:flex sm:flex xs:hidden xxs:hidden scrollbar flex-col py-2 lg:w-72 md:w-72 sm:w-72 xs:w-full  lg:h-44 md:h-44 sm:h-44  bg-[#ffffff] rounded-xl px-3 gap-3 overflow-auto">
              {Filter.map((item) => {
                return (
                  <Link
                    href={`/${item.id.toString()}`}
                    key={item.id}
                    className="hover:bg-[#f5f5f5] cursor-pointer py-3 rounded-xl px-2"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
        <div className="OtherContent flex bg-HeroImagelg bg-center bg-contain absolute w-full h-full rounded-t-3xl  bg-no-repeat  " />
      </div>

      <div className=" lg:px-20 md:px-20 sm:px-10 xs:px-7  xxs:px-5 relative OtherContent  bg-[#e3e1dc] w-full lg:h-[52%] md:h-[63%] sm:h-[60%] xs:h-[62%] xxs:h-[65%] rounded-b-3xl">
        <div className="flex items-center gap-1 w-full py-5">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[#4d270c]">Most Searched Breeds</p>
            <div className="w-14 border-b-4 border-[#4d270c] rounded-full  " />
          </div>
        </div>

        <div className="flex w-full  items-center justify-between">
          <p className="text-[#291507] lg:text-4xl md:text-xl font-bold lg:w-[35%] md:w-[45%]">
            66+ Breeds For you to discover
          </p>
          <div className="lg:flex md:flex sm:flex xs:hidden xxs:hidden  items-center gap-3">
            <p
              onClick={() => handleClick()}
              className="lg:text-lg md:text-lg sm:text-md xs:text-sm xxs:text-xs font-semibold cursor-pointer text-[#73675c] "
            >
              SEE MORE
            </p>
            <HiOutlineArrowNarrowRight className="text-[#73675c] text-lg " />
          </div>
        </div>
        <div className="cards grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-2 mt-5 gap-5 w-full lg:h-full md:h-[70%] sm:h-[70%] xs:h-[60%]  ">
          <div className="  flex h-[20vh] justify-center items-center lg:left-[5vw] rounded-xl absolute z-10 ">
            <div className="  w-8 lg:h-[15vh] rounded-xl bg-[#dec68b]   " />
          </div>

          {slicedArray.map((item, i) => {
            return (
              <Link
                href={`/${item.id.toString()}`}
                key={item.id}
                className="flex snap-start flex-col w-full lg:h-[25vh] md:h-[20vh] sm:h-[18vh] xs:h-[18vh] xxs:h-[18vh]  rounded-xl "
              >
                <Image
                  src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                  className="h-full w-full rounded-xl  object-cover "
                  width={400}
                  height={400}
                  alt=""
                />
                <p className="text-[#291507] lg:text-md md:text-md sm:text-md xs:text-sm xxs:text-xs xxs:font-bold ">{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FrontPage;
