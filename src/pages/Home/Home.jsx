import React from "react";
import { useState } from "react";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";
import Loader from "../../components/Loader/Loader";
import ArrowRed from "../../images/arrow.svg";
import ArrowOrange from "../../images/arrow_or.svg";
// import { TitleWrapperManga } from "../TopManga/TopManga.styled";
import { StyledLink, TitleWrapper } from "../Home/Home.styled";
import { Link, NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  console.log(setIsLoading);
  const location = useLocation();
  const backLinkHref1 = location.state?.from ?? "/topmanga";
  const backLinkHref2 = location.state?.from ?? "/topanime";

  return (
    <Link to="/" state={{ from: location }}>
      <main>
        {isLoading === true && <Loader />}
        <TitleWrapper>
          <h2>Популярна манґа</h2>
          <StyledLink
            as={NavLink}
            to={backLinkHref1}
            // onClick={() => {
            //   dispatch(resetState());
            // }}
          >
            <p>Переглянути все</p>
            <img src={ArrowRed} alt="ArrowRed" />
          </StyledLink>
        </TitleWrapper>
        <TopMangaGallery />
        <TitleWrapper>
          <h2 className="anime__title">Популярне аніме</h2>
          <StyledLink as={NavLink} to={backLinkHref2}>
            <p>Переглянути все</p>
            <img src={ArrowOrange} alt="ArrowOrange" />
          </StyledLink>
        </TitleWrapper>
        <TopAnimeGallery />
      </main>
    </Link>
  );
};

export default Home;
