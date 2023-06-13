import React, { useState } from "react";
// import { useState } from "react";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
// import Loader from "../components/Loader/Loader";

const TopManga = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  //   console.log(setIsLoading);

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
