import React, { useState } from "react";
import { useGetMangaByIdQuery } from "../../redux/mangaSlice";
import { useParams } from "react-router-dom";

const MangaInfo = ({ mal_id, title }) => {
  const { data, error, isLoading } = useGetMangaByIdQuery({ mal_id });
  // console.log(data.data);

  return (
    <div className="font-segoe-ui">
      <h2>Назва </h2>
      <p>authors</p>
      <p>genres</p>
      <img src="" alt="" />
    </div>
  );
};

export default MangaInfo;
