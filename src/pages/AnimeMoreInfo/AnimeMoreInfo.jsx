import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnimeInfo from "../../components/AnimeInfo/AnimeInfo";
import { AnimeMoreInfoContainer } from "./AnimeMoreInfo.styled";

const AnimeMoreInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <AnimeMoreInfoContainer>
      <Link to={backLinkHref}>
        <AnimeInfo />
      </Link>
    </AnimeMoreInfoContainer>
  );
};

export default AnimeMoreInfo;
