import React, { useState } from "react";
import { useGetAnimeByIdQuery } from "../../redux/animeSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const AnimeInfo = () => {
  const [isActive, setIsActive] = useState(false);
  let { mal_id } = useParams();
  const { data: getAnimeById, isLoading } = useGetAnimeByIdQuery(mal_id);
  console.log(useGetAnimeByIdQuery(mal_id));
  // console.log("data", data);

  // let cn = "text-block";
  // if (isActive) cn += " text-block_active";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-segoe-ui">
      getAnimeById?.data?.length ? (
      <>
        <h2>{getAnimeById.data.title}</h2>
        <p>
          <b>Authors:</b>
          {/* {getAnimeById.data.authors.map((author) => author.name)} */}
        </p>
        <p>
          <b>Genres:</b>
          {getAnimeById.data.genres.map((genre) => genre.name)}
        </p>
        <img src={getAnimeById.data.images.jpg.image_url} alt="Anime" />
        <p>
          <b>Synopsis:</b>
          {getAnimeById.data.synopsis}
        </p>
        {/* <button onClick={() => setIsActive(!isActive)}>...</button> */}
      </>
      )
    </div>
  );
};

export default AnimeInfo;
