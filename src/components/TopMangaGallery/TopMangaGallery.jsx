import React, { useEffect } from "react";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";
import Loader from "../Loader/Loader";
import { TopMangaList } from "./TopMangaGallery.styled";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopMangaGallery = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const { data, error, isLoading } = useGetTopMangaQuery({
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

  return (
    <div className="font-segoe-ui">
      {error ? (
        <p style={{ color: "red" }}>Oh no, there was an error</p>
      ) : isLoading ? (
        <Loader />
      ) : data.data.length > 0 ? (
        <TopMangaList>
          {data.data.map((manga) => (
            <Link to={`/manga/${manga.mal_id}`} state={{ from: location }}>
              <TopMangaCard manga={manga} key={manga.mal_id} />
            </Link>
          ))}
        </TopMangaList>
      ) : null}
    </div>
  );
};

export default TopMangaGallery;
