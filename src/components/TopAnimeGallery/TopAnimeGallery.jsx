import React from "react";
import { useGetTopAnimeQuery } from "../../redux/animeSlice";
import TopAnimeCard from "../TopAnimeCard/TopAnimeCard";
import Loader from "../Loader/Loader";
import { TopAnimeList } from "./TopAnimeGallery.styled";

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
