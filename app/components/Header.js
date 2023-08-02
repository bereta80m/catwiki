"use client";
import { useRouter } from "next/navigation";
import React from "react";


function Header() {
  const router = useRouter()
  return (
    <header className="OtherContent flex w-full justify-between pb-5">
      <div onClick={()=> router.push('/')} className="bg-CatwikiLogo cursor-pointer bg-contain bg-no-repeat w-44 h-14 " />
    </header>
  )
}

export default Header;
