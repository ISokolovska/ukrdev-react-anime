import React from "react";
import PropTypes from "prop-types";
import {
  PopMangaImage,
  PopMangaImageWrapper,
  PopMangaItem,
} from "./PopMangaCard.styled";
// import { ImageItem, ImageItemShow } from "./Styled";
import Love from "../../images/love.jpg";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";

const PopMangaCard = (
  {
    //   image: { id, tags, webformatURL, largeImageURL },
    //   toggleModal,
  }
) => {
  return (
    <PopMangaItem
    //   className="gallery-item"
    //   onClick={() => {
    //     toggleModal({ tags, largeImageURL });
    //   }}
    >
      <PopMangaImageWrapper>
        <p>манґа</p>
        <PopMangaImage
          // src={webformatURL}
          // alt={tags}
          src={Love}
          alt="manga"
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
      </PopMangaImageWrapper>

      <p>Назва взагалі може бути досить довг...</p>
    </PopMangaItem>
  );
};

export default PopMangaCard;

PopMangaCard.propTypes = {
  //   image: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     webformatURL: PropTypes.string.isRequired,
  //     largeImageURL: PropTypes.string.isRequired,
  //   }).isRequired,
};
