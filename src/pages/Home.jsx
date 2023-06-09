import { useState } from "react";
import PopMangaGallery from "../components/PopMangaGallery/PopMangaGallery";
import PopAnimeGallery from "../components/PopAnimeGallery/PopAnimeGallery";
import Loader from "../components/Loader/Loader";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);

  return (
    <main>
      {isLoading === true && <Loader />}
      <PopMangaGallery />
      <PopAnimeGallery />
    </main>
  );
};
