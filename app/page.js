import Image from "next/image";
import FrontPage from "./components/FrontPage";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <FrontPage />
      <div className="OtherContent pt-20 grid lg:grid-cols-2 lg:px-20 md:px-20 sm:px-10 xs:px-7  xxs:px-5  relative w-full  h-[65%] rounded-t-3xl">
        <div className="OtherContent flex flex-col gap-5">
          <div className="OtherContent border-b-4 w-12 border-[#4d270c] rounded-full " />
          <p className="OtherContent text-4xl font-bold w-72 text-[#291507]">
            Why should you have a cat?
          </p>
          <p className="OtherContent text-justify lg:w-96">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold text-[#73675c] ">READ MORE</p>
            <HiOutlineArrowNarrowRight className="text-[#73675c] text-lg " />
          </div>
        </div>

        <div className="cards grid grid-cols-2  grid-flow-col gap-4 lg:pt-0 md:pt-10 sm:pt-10 xs:pt-10 xxs:pt-10 pb-5  ">
          <div className="flex flex-col gap-5 w-full ">
          <div className="bg-image2 bg-no-repeat h-28 bg-right bg-contain" />
            <div className="flex bg-right bg-image1 bg-no-repeat  h-44 bg-contain " />
          </div>
          <div className="bg-image3 bg-no-repeat bg-contain h-60" />
        </div>
      </div>
    </div>
  );
}
