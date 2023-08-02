"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [catsList, setCatsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterSearch, setFilterSearch] = useState([])
  const Filter = catsList?.filter((item)=> searchInput === "" ? item : item?.name.toLowerCase().includes(searchInput.toLowerCase() || item?.alt_names.toLowerCase().includes(searchInput.toLowerCase())))
  const router = useRouter()

  const HandleSubmit = (e) => {
    if (searchInput !== "") {
      e.preventDefault();
      //setFilterSearch(Filter)
      router.push(`/Query/${searchInput}`)
      console.log(Filter)
    }

  };

  useEffect(() => {
    const GetApiImages = async () => {
      try {
        const res = await fetch("/api/GetCatApi");
        const data = await res.json();
        //setCatsImages(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const GetData = async () => {
      try {
        const res = await fetch("/api/GetCatBreeds");
        const data = await res.json();
        setCatsList(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ catsList, searchInput, setSearchInput, HandleSubmit,Filter }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const UseGlobal = () => useContext(GlobalContext);
