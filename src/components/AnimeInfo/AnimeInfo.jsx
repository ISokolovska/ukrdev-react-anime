import React, { useState } from "react";
import { useGetAnimeByIdQuery } from "../../redux/animeSlice";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { InfoCard, ButtonInfo, InfoText, TextBlock } from "./AnimeInfo.styled";

const AnimeInfo = () => {
  const [isActive, setIsActive] = useState(false);
  let { mal_id } = useParams();
  const { data: getAnimeById, isLoading } = useGetAnimeByIdQuery(mal_id);
  // console.log(useGetAnimeByIdQuery(mal_id));
  console.log("data", getAnimeById);

  let cn = "text-block";
  if (isActive) cn += " text-block_active";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <InfoCard
      className="font-segoe-ui"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <>
        <img src={getAnimeById.data.images.jpg.image_url} alt="Anime" />
        <div className="anime-info__title">
          <h2>{getAnimeById.data.title}</h2>
        </div>
        <div>
          <p>
            <b>Authors:</b> &nbsp;
            {getAnimeById.data.licensors.map((licensor) => licensor.name)}
          </p>
          <p>
            <b>Genres:</b> &nbsp;
            {getAnimeById.data.genres.map((genre) => genre.name)}
          </p>
          <p>
            <b>Synopsis:</b>
          </p>
        </div>
        <TextBlock>
          <InfoText className={cn}>{getAnimeById.data.synopsis}</InfoText>
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

export default AnimeInfo;
