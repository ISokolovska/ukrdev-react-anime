import React from "react";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import {
  PopMangaImage,
  PopMangaImageWrapper,
  PopMangaItem,
} from "./PopMangaCard.styled";

const PopMangaCard = ({ manga: { title, images, score, favorites } }) => {
  return (
    <PopMangaItem
    //   className="gallery-item"
    //   onClick={() => {
    //     toggleModal({ tags, largeImageURL });
    //   }}
    >
      <PopMangaImageWrapper>
        <p>манґа</p>
        <PopMangaImage src={images.jpg.image_url} alt={title} />
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
      </PopMangaImageWrapper>

      <p>{title}</p>
    </PopMangaItem>
  );
};

export default PopMangaCard;

PopMangaCard.propTypes = {
  manga: PropTypes.shape({
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
