import React from "react";
import { Link, useLocation } from "react-router-dom";

const MangaMoreInfo = () => {
  const location = useLocation();
  //   const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to="/manga/moreinfo" state={{ from: location }}>
      <MangaMoreInfo />
    </Link>
  );
};

export default MangaMoreInfo;
