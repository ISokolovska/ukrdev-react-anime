import React, { useState } from "react";
import { useGetMangaByIdQuery } from "../../redux/mangaSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ButtonInfo, InfoCard, InfoText, TextBlock } from "./MangaInfo.styled";

const MangaInfo = () => {
  const [isActive, setIsActive] = useState(false);
  let { mal_id } = useParams();
  const { data: getMangaById, isLoading } = useGetMangaByIdQuery(mal_id);
  // console.log(useGetMangaByIdQuery(mal_id));
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
    <InfoCard className="font-segoe-ui">
      <>
        <img src={getMangaById.data.images.jpg.image_url} alt="manga" />
        <div className="manga-info__title">
          <h2>{getMangaById.data.title}</h2>
        </div>
        <div>
          <p>
            <b>Authors:</b>
            {getMangaById.data.authors.map((author) => author.name)}
          </p>
          <p>
            <b>Genres:</b>
            {getMangaById.data.genres.map((genre) => genre.name)}
          </p>
          <p>Synopsis:</p>
        </div>
        <TextBlock>
          <InfoText className={cn}>{getMangaById.data.synopsis}</InfoText>
          <ButtonInfo
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsActive(!isActive);
            }}
          >
            ...
          </ButtonInfo>
        </TextBlock>
      </>
    </InfoCard>
  );
};

export default MangaInfo;
