import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import Loader from "../Loader/Loader";
import MangaCard from "../MangaCard/MangaCard";
import { MangaList, TopMangaGalleryContainer } from "./TopMangaGallery.styled";

const TopMangaGallery = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const {
    data: getTopManga,
    error,
    isLoading,
  } = useGetTopMangaQuery({
    page,
    limit: perPage,
    // filter,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setPerPage(4);
    }
    if (location.pathname === "/top/manga") {
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
    <TopMangaGalleryContainer className="font-segoe-ui">
      <MangaList>
        {getTopManga.data.map((manga) => (
          <MangaCard manga={manga} key={manga.mal_id} />
        ))}
      </MangaList>
    </TopMangaGalleryContainer>
  );
};

export default TopMangaGallery;
