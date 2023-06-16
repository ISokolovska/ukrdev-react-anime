import React, { useEffect, useState } from "react";
import { useGetTopAnimeQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
import Loader from "../Loader/Loader";
import { TopAnimeList } from "./TopAnimeGallery.styled";
import { useLocation } from "react-router-dom";

const TopAnimeGallery = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const { data, error, isLoading } = useGetTopAnimeQuery({
    page,
    limit: perPage,
    // filter,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setPerPage(4);
    }
    if (location.pathname === "/top/anime") {
      setPerPage(8);
    }
  }, [location.pathname]);

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

export default TopAnimeGallery;
