import React from "react";
import { Link, useLocation } from "react-router-dom";
import MangaInfo from "../../components/MangaInfo/MangaInfo";

const MangaMoreInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to={backLinkHref}>
      <MangaInfo />
    </Link>
  );
};

export default MangaMoreInfo;
