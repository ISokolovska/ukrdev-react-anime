import React from "react";
import { useState } from "react";
import PopMangaGallery from "../../components/PopMangaGallery/PopMangaGallery";
import PopAnimeGallery from "../../components/PopAnimeGallery/PopAnimeGallery";
import Loader from "../../components/Loader/Loader";
import ArrowRed from "../../images/arrow.svg";
import ArrowOrange from "../../images/arrow_or.svg";
// import { TitleWrapperManga } from "../TopManga/TopManga.styled";
import { TitleWrapper } from "../TopAnime/TopAnime.styled";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  console.log(setIsLoading);

  return (
    <main>
      {isLoading === true && <Loader />}
      <TitleWrapper>
        <h2>Популярна манґа</h2>
        <button>
          <p>Переглянути все</p>
          <img src={ArrowRed} alt="ArrowRed" />
        </button>
      </TitleWrapper>
      <PopMangaGallery />
      <TitleWrapper>
        <h2 className="anime__title">Популярне аніме</h2>
        <button className="anime__btn">
          <p>Переглянути все</p>
          <img src={ArrowOrange} alt="ArrowOrange" />
        </button>
      </TitleWrapper>
      <PopAnimeGallery />
    </main>
  );
};

export default Home;
