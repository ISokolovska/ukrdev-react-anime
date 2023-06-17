import React from "react";
import { Link, useLocation } from "react-router-dom";
import MangaInfo from "../../components/MangaInfo/MangaInfo";

const MangaMoreInfo = ({ mal_id }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to={backLinkHref}>
      <MangaInfo mal_id={mal_id} />
    </Link>
  );
};

export default MangaMoreInfo;
