import React from "react";
import PropTypes from "prop-types";
import File from "../../images/file.svg";
import Star from "../../images/star.svg";
import Trash from "../../images/trash.svg";
import { AnimeImage, AnimeImageWrapper, AnimeItem } from "./AnimeCard.styled";
import { Link, NavLink, useLocation } from "react-router-dom";

const AnimeCard = ({ anime: { title, images, score, favorites, mal_id } }) => {
  const location = useLocation();
  return (
    <AnimeItem className="font-segoe-ui">
      <Link as={NavLink} to={`/anime/${mal_id}`} state={{ from: location }}>
        <AnimeImageWrapper>
          <p>аніме</p>
          <AnimeImage src={images.jpg.image_url} alt={title} />
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
        </AnimeImageWrapper>
      </Link>

      <p>{title}</p>
    </AnimeItem>
  );
};

export default AnimeCard;

AnimeCard.propTypes = {
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
