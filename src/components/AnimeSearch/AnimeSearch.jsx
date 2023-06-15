import { useGetAnimeSearchQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
import Loader from "../Loader/Loader";
import { TopAnimeList } from "../TopAnimeGallery/TopAnimeGallery.styled";

const AnimeSearch = () => {
  const { data, error, isLoading } = useGetAnimeSearchQuery();
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data.data ? (
        <TopAnimeList>
          {data.data.map((anime) => (
            <TopAnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </TopAnimeList>
      ) : null}
    </>
  );
};

export default AnimeSearch;
