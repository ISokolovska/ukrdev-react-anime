import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "../TopMangaGallery/TopMangaGallery.styled";
import { useLocation, useSearchParams } from "react-router-dom";

const MangaSearch = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  // const params = useLocation();
  // let search = decodeURI(params.search).split("=").at(-1);

  const { data, error, isLoading } = useGetMangaSearchQuery({
    page,
    limit: 8,
    search,
  });

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
