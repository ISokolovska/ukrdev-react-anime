import React, { useState } from "react";
import MangaSearch from "../../components/MangaSearch/MangaSearch";
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  // const [search, setSearch] = useSearchParams();
  // const [mangaList, setMangaList] = useState();

  return (
    <Link to="/search" state={{ from: location }}>
      <MangaSearch
      // search={search}
      // mangaList={mangaList}
      // setSearch={setSearch}
      />

      <AnimeSearch />
    </Link>
  );
};

export default SearchResults;
