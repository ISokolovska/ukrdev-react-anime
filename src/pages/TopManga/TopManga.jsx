import React from "react";
// import { useState } from "react";
import PopMangaGallery from "../../components/PopMangaGallery/PopMangaGallery";
// import Loader from "../components/Loader/Loader";

const TopManga = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  //   console.log(setIsLoading);

  return (
    <main>
      {/* {isLoading === true && <Loader />} */}
      <PopMangaGallery />
    </main>
  );
};

export default TopManga;
