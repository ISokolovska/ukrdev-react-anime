import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";

const TopAnime = () => {
  const location = useLocation();
  return (
    <main>
      {/* {isLoading === true && <Loader />} */}
      <TopAnimeGallery />
    </main>
  );
};

export default TopAnime;
