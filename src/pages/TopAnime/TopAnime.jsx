import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";

const TopAnime = () => {
  const location = useLocation();
  return (
    <Link to="/topanime" state={{ from: location }}>
      {/* {isLoading === true && <Loader />} */}

      <TopAnimeGallery />
    </Link>
  );
};

export default TopAnime;
