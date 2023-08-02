"use client";
import React, { useEffect, useState } from "react";
import { UseGlobal } from "../context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

function Cat({ params }) {
  const { CatID } = params;
  const { catsList } = UseGlobal();
  const [otherImages, setOtherImages] = useState([]);
  const CurrentCat = catsList?.find((cat) => cat.id === CatID);
  const Randomizer = () => {
    return Math.random() - 0.5;
  };

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${CurrentCat?.id}&api_key=live_J91IHxv1lzgc9QWKYlaBQxuNuaOGey6PSsD1FbhE0bYVZqpP4nh8KA6CeM8wEARq`
      );
      const data = await res.json();
      setOtherImages(data);
      console.log(data);
    };
    GetData();
  }, [CurrentCat]);

  const CurrentCalc = {
    adaptability: CurrentCat?.adaptability,
    affection_level: CurrentCat?.affection_level,
    child_friendly: CurrentCat?.child_friendly,
    grooming: CurrentCat?.grooming,
    intelligence: CurrentCat?.intelligence,
    health_issues: CurrentCat?.health_issues,
    social_needs: CurrentCat?.social_needs,
    stranger_friendly: CurrentCat?.stranger_friendly,
  };

  return (
    <div className="grid gap-5 w-full h-screen  py-5 bg-white">
      <div className="grid lg:grid-cols-2 pb-10 w-full border-b lg:pl-10 md:pl-10 gap-5">
        <div className="flex relative lg:w-60 lg:h-[30vh] md:w-52 md:h-[25vh] sm:w-60 sm:h-[30vh] xs:w-60 xs:h-[30vh]  ">
          <Image
            src={`https://cdn2.thecatapi.com/images/${CurrentCat?.reference_image_id}.jpg`}
            alt="No Image Available"
            width={500}
            height={500}
            className="w-full object-cover lg:h-full md:h-full sm:h-full xs:h-full xxs:h-[60vh] rounded-xl z-20"
          />
          <div className="absolute -left-2 z-10 rounded-full lg:my-7 bg-[#dec68b] w-10 lg:h-44" />
        </div>
        <div className="w-full flex gap-3 flex-col ">
          <p className="text-3xl font-bold text-[#291507] ">
            {CurrentCat?.name}
          </p>
          <p className="text-[#291507]">{CurrentCat?.description}</p>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex items-center">
              <p className="">
                <font className="font-semibold">Temperament:</font>{" "}
                {CurrentCat?.temperament}
              </p>
            </div>

            <div className="flex items-center">
              <p className="">
                <font className="font-semibold">Origin:</font>{" "}
                {CurrentCat?.origin}
              </p>
            </div>

            <div className="flex items-center">
              <p className="">
                <font className="font-semibold">Life span:</font>{" "}
                {CurrentCat?.life_span} years
              </p>
            </div>

            {Object.entries(CurrentCalc).map(([key, values], index) => {
              return (
                <div className="flex items-center">
                  <p className="font-semibold w-44">{key}: </p>
                  {Array.from({ length: values }).map((item, index) => {
                    return (
                      <div
                        className={`bg-[#544439] w-10 h-2 rounded-full ml-2`}
                      />
                    );
                  })}
                  {Array.from({ length: 5 - values }).map((item, index) => {
                    return (
                      <div
                        className={`bg-[#e0e0e0] w-10 h-2 rounded-full ml-2`}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full py-5">
        <p className="text-2xl font-bold text-[#291507]">Other Photos</p>

        <div className="cards grid mt-5 s lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 gap-5 w-full h-full ">
          {otherImages.map((item) => {
            return (
              <Link
                href={`/${item.id.toString()}`}
                key={item.id}
                className="flex snap-start z-20 flex-col w-full h-[20vh] rounded-xl "
              >
                <Image
                  src={item.url}
                  className="h-[20vh] rounded-xl  object-cover "
                  width={400}
                  height={400}
                  alt=""
                />
                {/*<p className="text-[#291507] ">{item.name}</p> */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cat;

