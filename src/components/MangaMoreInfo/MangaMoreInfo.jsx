import React from "react";
import { useGetMangaMoreInfoQuery } from "../../redux/mangaSlice";

const MangaMoreInfo = () => {
  const { data, error, isLoading } = useGetMangaMoreInfoQuery();

  return <div>{data.data && <></>}</div>;
};

export default MangaMoreInfo;
