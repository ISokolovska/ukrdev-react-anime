import React from "react";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import {
  TopAnimeImage,
  TopAnimeImageWrapper,
  TopAnimeItem,
} from "./TopAnimeCard.styled";

const TopAnimeCard = ({ anime: { title, images, score, favorites } }) => {
  return (
    <TopAnimeItem
    //   className="gallery-item"
    //   onClick={() => {
    //     toggleModal({ tags, largeImageURL });
    //   }}
    >
      <TopAnimeImageWrapper>
        <p>аніме</p>
        <TopAnimeImage src={images.jpg.image_url} alt={title} />
        <ul>
          <li>
            <p>{favorites}</p>
            <img src={File} alt="File" />
          </li>
          <li>
            <p>{score}</p>
            <img src={Star} alt="Star" />
          </li>
          <li>
            <p>1645</p>
            <img src={Trash} alt="Trash" />
          </li>
        </ul>
      </TopAnimeImageWrapper>

      <p>{title}</p>
    </TopAnimeItem>
  );
};

export default TopAnimeCard;

TopAnimeCard.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    favorites: PropTypes.number.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
};
