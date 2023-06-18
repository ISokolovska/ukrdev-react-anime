import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnimeInfo from "../../components/AnimeInfo/AnimeInfo";

const AnimeMoreInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to={backLinkHref}>
      <AnimeInfo />
    </Link>
  );
};

export default AnimeMoreInfo;
