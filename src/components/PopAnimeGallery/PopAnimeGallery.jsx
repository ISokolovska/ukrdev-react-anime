import { useEffect, useState } from "react";
import { getTopAnime } from "../../services/Api";
import PopAnimeCard from "../PopAnimeCard/PopAnimeCard";
import Arrow from "../../images/arrow_or.svg";
import { PopAnimeList, TitleWrapper } from "./PopAnimeGallery.styled";

const PopAnimeGallery = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const data = await getTopAnime();
        setTopAnime(() => data.data);
      } catch (err) {
        // Notiflix.Notify.failure(err.message);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnime();
  }, []);

  return (
    <>
      <TitleWrapper>
        <h2>Популярне аніме</h2>
        <button>
          <p>Переглянути все</p>
          <img src={Arrow} alt="Arrow" />
        </button>
      </TitleWrapper>
      {topAnime && topAnime.length > 0 && (
        <PopAnimeList>
          {topAnime.map((anime) => (
            <PopAnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </PopAnimeList>
      )}
    </>
  );
};

export default PopAnimeGallery;
