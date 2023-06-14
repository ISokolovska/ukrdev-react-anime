import React from "react";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import {
  TopMangaImage,
  TopMangaImageWrapper,
  TopMangaItem,
} from "./TopMangaCard.styled";

const TopMangaCard = ({ manga: { title, images, score, favorites } }) => {
  return (
    <TopMangaItem>
      <TopMangaImageWrapper>
        <p>манґа</p>
        <TopMangaImage src={images.jpg.image_url} alt={title} />
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
      </TopMangaImageWrapper>

      <p>{title}</p>
    </TopMangaItem>
  );
};

export default TopMangaCard;

TopMangaCard.propTypes = {
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
