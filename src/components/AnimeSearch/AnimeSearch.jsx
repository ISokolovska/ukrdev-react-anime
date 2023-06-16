import { useGetAnimeSearchQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
import Loader from "../Loader/Loader";
import { TopAnimeList } from "../TopAnimeGallery/TopAnimeGallery.styled";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AnimeSearch = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const { data, error, isLoading } = useGetAnimeSearchQuery({
    page,
    limit: 8,
    search,
  });
  return (
    <div className="font-segoe-ui">
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
    </div>
  );
};

export default AnimeSearch;
