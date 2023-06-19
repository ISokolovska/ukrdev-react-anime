import { useGetAnimeSearchQuery } from "../../redux/animeSlice";
import AnimeCard from "../AnimeCard/AnimeCard";
import Loader from "../Loader/Loader";
import { AnimeList } from "../TopAnimeGallery/TopAnimeGallery.styled";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AnimeSearch = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: getAnimeSearch,
    error,
    isLoading,
  } = useGetAnimeSearchQuery({
    page,
    limit: 8,
    search,
  });

  // if (error) {
  //   return <>Oh no, there was an error</>;
  // }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-segoe-ui">
      <AnimeList>
        {getAnimeSearch.data.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </AnimeList>
    </div>
  );
};

export default AnimeSearch;
