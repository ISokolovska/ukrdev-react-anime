import React from "react";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "./TopMangaGallery.styled";

const TopMangaGallery = () => {
  const { data, error, isLoading } = useGetTopMangaQuery();
  // console.log(data.data);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data.data ? (
        <TopMangaList>
          {data.data.map((manga) => (
            <TopMangaCard manga={manga} key={manga.mal_id} />
          ))}
        </TopMangaList>
      ) : null}
    </>
  );
};

export default TopMangaGallery;
