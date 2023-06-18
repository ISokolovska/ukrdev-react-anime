import React, { useState } from "react";
import { useGetMangaByIdQuery } from "../../redux/mangaSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { MangaInfoMore } from "./MangaInfo.styled";

const MangaInfo = () => {
  const [isActive, setIsActive] = useState(false);
  let { mal_id } = useParams();
  const { data: getMangaById, isLoading } = useGetMangaByIdQuery(mal_id);
  console.log(useGetMangaByIdQuery(mal_id));
  // console.log("data", data);

  let cn = "text-block";
  if (isActive) cn += " text-block_active";

  // if (error) {
  //   return <>Oh no, there was an error</>;
  // }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-segoe-ui">
      getMangaById?.data?.length ? (
      <>
        <h2>{getMangaById.data.title}</h2>
        <p>
          <b>Authors:</b>
          {getMangaById.data.authors.map((author) => author.name)}
        </p>
        <p>
          <b>Genres:</b>
          {getMangaById.data.genres.map((genre) => genre.name)}
        </p>
        <img src={getMangaById.data.images.jpg.image_url} alt="manga" />

        <p>Synopsis:</p>
        <MangaInfoMore className={cn}>
          {getMangaById.data.synopsis}
        </MangaInfoMore>
        <button
          className="more"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(!isActive);
          }}
          style={{
            width: "30px",
            height: "30px",
            color: "var(--main-text-cl)",
            border: "1px solid var(--main-text-cl)",
          }}
        >
          ...
        </button>
      </>
      )
    </div>
  );
};

export default MangaInfo;
