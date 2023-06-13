import { useGetTopAnimeQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
import { TopAnimeList } from "./TopAnimeGallery.styled";
import Loader from "../Loader/Loader";

const TopAnimeGallery = () => {
  const { data, error, isLoading } = useGetTopAnimeQuery();
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

export default TopAnimeGallery;
