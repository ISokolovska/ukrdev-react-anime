import { useGetTopAnimeQuery } from "../../redux/animeSlice";
import PopAnimeCard from "../PopAnimeCard/PopAnimeCard";
import { PopAnimeList } from "./PopAnimeGallery.styled";
import Loader from "../Loader/Loader";

const PopAnimeGallery = () => {
  const { data, error, isLoading } = useGetTopAnimeQuery();
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
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
