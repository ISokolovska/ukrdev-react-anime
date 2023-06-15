import React, { useEffect } from "react";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "./TopMangaGallery.styled";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const TopMangaGallery = () => {
  // console.log(data.data);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  // const { page, setPage, setTotalCount, countPage, perPage } = usePagination();
  const { data, error, isLoading } = useGetTopMangaQuery({
    page,
    limit: perPage,
    // filter,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setPerPage(4);
    }
    if (location.pathname === "/topmanga") {
      setPerPage(8);
    }
  }, [location.pathname]);

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
