import React from "react";
import { useState } from "react";
import PopMangaGallery from "../components/PopMangaGallery/PopMangaGallery";
import PopAnimeGallery from "../components/PopAnimeGallery/PopAnimeGallery";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  console.log(setIsLoading);

  return (
    <main>
      {isLoading === true && <Loader />}
      <PopMangaGallery />
      <PopAnimeGallery />
    </main>
  );
};

export default Home;
