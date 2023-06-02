import { FiArrowRight } from "react-icons/fi";
import PopAnimeCard from "../PopAnimeCard/PopAnimeCard";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { PopAnimeList, TitleWrapper } from "./PopAnimeGallery.styled";
import Arrow from "../../images/arrow_or.svg";

const PopAnimeGallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);

  return (
    <>
      <TitleWrapper>
        <h2>Популярне аніме</h2>
        <button>
          <p>Переглянути все</p>
          <img src={Arrow} alt="Arrow" />
        </button>
      </TitleWrapper>
      <PopAnimeList>
        {isLoading === true && <Loader />}
        <PopAnimeCard />
      </PopAnimeList>
    </>

    /* {Animes && (
        <div>
          {Animes && Animes.length > 0 && (
            <ul Animes={Animes}>
              {Animes.map((Anime) => {
                return (
                  <PopAnimeCard
                  // key={Anime.id}
                  />
                );
              })}
            </ul>
          )}
        </div>
      )} */
  );
};

export default PopAnimeGallery;
