import React from "react";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import {
  PopAnimeImage,
  PopAnimeImageWrapper,
  PopAnimeItem,
} from "./PopAnimeCard.styled";

const PopAnimeCard = ({ anime: { title, images, score, favorites } }) => {
  return (
    <PopAnimeItem
    //   className="gallery-item"
    //   onClick={() => {
    //     toggleModal({ tags, largeImageURL });
    //   }}
    >
      <PopAnimeImageWrapper>
        <p>аніме</p>
        <PopAnimeImage src={images.jpg.image_url} alt={title} />
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
      </PopAnimeImageWrapper>

      <p>{title}</p>
    </PopAnimeItem>
  );
};

export default PopAnimeCard;

PopAnimeCard.propTypes = {
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
