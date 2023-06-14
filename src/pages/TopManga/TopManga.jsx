import React, { useState } from "react";
// import { useState } from "react";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import usePagination from "../../hooks/usePagination";
// import Loader from "../components/Loader/Loader";

const TopManga = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // const { page, setPage, setTotalCount, countPage, perPage } = usePagination();
  // const { data, error, isLoading } = useGetTopMangaQuery({
  //   page,
  //   limit: perPage,
  // });

  // const { data, totalCount } = data || [];

  // useEffect(() => {
  //   setPage(1);
  //   setTotalCount(totalCount);
  // }, [totalCount]);

  return (
    <Link to="/topmanga" state={{ from: location }}>
      <main>
        {isLoading === true && <Loader />}
        <TopMangaGallery />
      </main>
    </Link>
  );
};

export default TopManga;
