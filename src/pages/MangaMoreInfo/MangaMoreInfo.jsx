import React from "react";
import { Link, useLocation } from "react-router-dom";
import MangaInfo from "../../components/MangaInfo/MangaInfo";
import { MangaMoreInfoContainer } from "./MangaMoreInfo.styled";

const MangaMoreInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <MangaMoreInfoContainer>
      <Link to={backLinkHref}>
        <MangaInfo />
      </Link>
    </MangaMoreInfoContainer>
  );
};

export default MangaMoreInfo;
