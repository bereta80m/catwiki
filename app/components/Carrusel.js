"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { UseGlobal } from "../context/GlobalContext";
import Image from "next/image";

function Carrusel() {
  const { catsList } = UseGlobal();
  const [Width, setWidth] = useState(0)
  const CarruselRef = useRef(null)
  useEffect(() => {
    CarruselRef.current.scrollWidth, CarruselRef.current.offsetWidth 
    setWidth(CarruselRef.current.scrollWidth - CarruselRef.current.offsetWidth )
  }, [])
  return (
    <div className="App border">
      <motion.div ref={CarruselRef} className="carrusel cursor-grab overflow-hidden" >
        <motion.div drag="x"  dragConstraints={{right:0,left:-Width}} className="inner-carrusel flex">
          {catsList.map((item) => {
            return (
              <motion.div className="item min-h-[40rem] min-w-[30rem] p-10">
                <Image
                  src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                  className="w-80 h-80 rounded-lg"
                  alt=""
                  width={400}
                  height={400}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrusel;
