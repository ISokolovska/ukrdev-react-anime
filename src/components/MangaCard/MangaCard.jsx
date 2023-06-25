import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import { MangaImage, MangaImageWrapper, MangaItem } from "./MangaCard.styled";

const MangaCard = ({ manga: { title, images, score, favorites, mal_id } }) => {
  const location = useLocation();
  // console.log(manga.title);
  return (
    <MangaItem className="font-segoe-ui">
      <Link as={NavLink} to={`/manga/${mal_id}`} state={{ from: location }}>
        <MangaImageWrapper>
          <p>манґа</p>
          <MangaImage src={images.jpg.image_url} alt={title} />
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
        </MangaImageWrapper>
      </Link>
      <p>{title}</p>
    </MangaItem>
  );
};

export default MangaCard;

MangaCard.propTypes = {
  manga: PropTypes.shape({
    title: PropTypes.string.isRequired,
    score: PropTypes.number,
    favorites: PropTypes.number.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
};
