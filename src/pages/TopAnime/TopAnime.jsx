import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";

const TopAnime = () => {
  const location = useLocation();
  return (
    <Link to="/topanime" state={{ from: location }}>
      <main>
        {/* {isLoading === true && <Loader />} */}

        <TopAnimeGallery />
      </main>
    </Link>
  );
};

export default TopAnime;
