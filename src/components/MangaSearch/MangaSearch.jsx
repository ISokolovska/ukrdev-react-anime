import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "../TopMangaGallery/TopMangaGallery.styled";

const MangaSearch = () => {
  const { data, error, isLoading } = useGetMangaSearchQuery();

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

export default MangaSearch;
