import { useGetAnimeSearchQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
// import { TopAnimeList } from "./TopAnimeGallery.styled";
import Loader from "../Loader/Loader";

const AnimeGallery = () => {
  const { data, error, isLoading } = useGetAnimeSearchQuery();
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data.data ? (
        <ul>
          {data.data.map((anime) => (
            <TopAnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default AnimeGallery;
