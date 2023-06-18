import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import MangaCard from "../MangaCard/MangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "../TopMangaGallery/TopMangaGallery.styled";

const MangaSearch = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: getMangaSearch,
    error,
    isLoading,
  } = useGetMangaSearchQuery({
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

  // console.log("data", data);
  return (
    <div className="font-segoe-ui">
      getMangaSearch?.data?.length ? (
      <TopMangaList>
        {getMangaSearch.data.map((manga) => (
          <MangaCard manga={manga} key={manga.mal_id} />
        ))}
      </TopMangaList>
      )
    </div>
  );
};

export default MangaSearch;
