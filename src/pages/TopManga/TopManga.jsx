import React, { useState } from "react";
// import { useState } from "react";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import { Link, NavLink, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import usePagination from "../../hooks/usePagination";
// import Loader from "../components/Loader/Loader";

const TopManga = () => {
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(false);
  // const params = useLocation();
  // let page = decodeURI(params.page);
  // const { data, error, isLoading } = useGetTopMangaQuery({ page: 1, limit: 4 });

  // const { data, totalCount } = data || [];

  // useEffect(() => {
  //   setPage(1);
  //   setTotalCount(totalCount);
  // }, [totalCount]);

  return (
    <main>
      {/* {isLoading === true && <Loader />} */}
      <TopMangaGallery />
    </main>
  );
};

export default TopManga;
