import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import TopMangaCard from "../TopMangaCard/TopMangaCard";

import Loader from "../Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import { useEffect } from "react";

const MangaGallery = () => {
  const params = useLocation();
  let search = params.search.split("=").at(-1);
  const { page } = usePagination();
  const { data, error, isLoading } = useGetMangaSearchQuery({ page, search });

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data.data ? (
        <ul>
          {data.data.map((manga) => (
            <TopMangaCard manga={manga} key={manga.mal_id} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MangaGallery;
