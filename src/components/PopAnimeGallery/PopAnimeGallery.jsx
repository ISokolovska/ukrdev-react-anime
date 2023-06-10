import { useGetTopAnimeQuery } from "../../services/anime";
import PopAnimeCard from "../PopAnimeCard/PopAnimeCard";
import Arrow from "../../images/arrow_or.svg";
import { PopAnimeList, TitleWrapper } from "./PopAnimeGallery.styled";

const PopAnimeGallery = () => {
  const { data, error, isLoading } = useGetTopAnimeQuery();
  return (
    <>
      <TitleWrapper>
        <h2>Популярне аніме</h2>
        <button>
          <p>Переглянути все</p>
          <img src={Arrow} alt="Arrow" />
        </button>
      </TitleWrapper>
      {/* {topAnime && topAnime.length > 0 && (
        <PopAnimeList>
          {topAnime.map((anime) => (
            <PopAnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </PopAnimeList>
      )} */}

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.data ? (
        <PopAnimeList>
          {data.data.map((anime) => (
            <PopAnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </PopAnimeList>
      ) : null}
    </>
  );
};

export default PopAnimeGallery;
