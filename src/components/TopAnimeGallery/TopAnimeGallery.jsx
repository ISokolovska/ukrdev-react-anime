import React, { useEffect, useState } from "react";
import { useGetTopAnimeQuery } from "../../redux/animeSlice";
import AnimeCard from "../AnimeCard/AnimeCard";
import Loader from "../Loader/Loader";
import { AnimeList } from "./TopAnimeGallery.styled";
import { useLocation } from "react-router-dom";

const TopAnimeGallery = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const {
    data: getTopAnime,
    error,
    isLoading,
  } = useGetTopAnimeQuery({
    page,
    limit: perPage,
    // filter,
  });
  // console.log(getTopAnime.data.lenth);

  useEffect(() => {
    if (location.pathname === "/") {
      setPerPage(4);
    }
    if (location.pathname === "/top/anime") {
      setPerPage(8);
    }
  }, [location.pathname]);

  // if (error) {
  //   return <>Oh no, there was an error</>;
  // }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-segoe-ui">
      <AnimeList>
        {getTopAnime.data.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </AnimeList>
    </div>
  );
};

export default TopAnimeGallery;
