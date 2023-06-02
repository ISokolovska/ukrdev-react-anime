import React from "react";
import PropTypes from "prop-types";
import {
  PopAnimeImage,
  PopAnimeImageWrapper,
  PopAnimeItem,
} from "./PopAnimeCard.styled";
// import { ImageItem, ImageItemShow } from "./Styled";
import Love from "../../images/love.jpg";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";

const PopAnimeCard = (
  {
    //   image: { id, tags, webformatURL, largeImageURL },
    //   toggleModal,
  }
) => {
  return (
    <PopAnimeItem
    //   className="gallery-item"
    //   onClick={() => {
    //     toggleModal({ tags, largeImageURL });
    //   }}
    >
      <PopAnimeImageWrapper>
        <p>аніме</p>
        <PopAnimeImage
          // src={webformatURL}
          // alt={tags}
          src={Love}
          alt="Anime"
        />
        <ul>
          <li>
            <p>546</p>
            <img src={File} alt="File" />
          </li>
          <li>
            <p>10/10</p>
            <img src={Star} alt="Star" />
          </li>
          <li>
            <p>1645</p>
            <img src={Trash} alt="Trash" />
          </li>
        </ul>
      </PopAnimeImageWrapper>

      <p>Назва взагалі може бути досить довг...</p>
    </PopAnimeItem>
  );
};

export default PopAnimeCard;

PopAnimeCard.propTypes = {
  //   image: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     webformatURL: PropTypes.string.isRequired,
  //     largeImageURL: PropTypes.string.isRequired,
  //   }).isRequired,
};
