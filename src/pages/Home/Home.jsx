import React, { useState } from "react";
// import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";
// import SearchResults from "../../components/SearchResults/SearchResults";
import MangaSearch from "../../components/MangaSearch/MangaSearch";
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";
// import Loader from "../../components/Loader/Loader";
import ArrowRed from "../../images/arrow.svg";
import ArrowOrange from "../../images/arrow_or.svg";
import { StyledLink, TitleWrapper } from "../Home/Home.styled";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const params = useLocation();
  let search = params.search.split("=").at(-1);

  const location = useLocation().pathname.split("/");
  const backLinkHref1 = location.state?.from ?? "/top/manga";
  const backLinkHref2 = location.state?.from ?? "/top/anime";
  const backLinkHref3 = location.state?.from ?? "/search";

  return (
    <main>
      {/* {isLoading === true && <Loader />} */}
      {!search && (
        <>
          <TitleWrapper>
            <h2>Популярна манґа</h2>
            <StyledLink as={NavLink} to={backLinkHref1}>
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
        </>
      )}

      {
        search && (
          <>
            <StyledLink
              as={NavLink}
              to={backLinkHref3}
              style={{ justifyContent: "flex-start" }}
            >
              <p>Переглянути все</p>
              <img src={ArrowRed} alt="ArrowRed" />
            </StyledLink>
            <MangaSearch />
            <AnimeSearch />
          </>
        )
        // (<p style={{ color: "red" }}>Нажаль ми нічого не знайшли </p>)
      }
    </main>
  );
};

export default Home;

// : data.data.length === 0 ? (
//         <p>Нажаль ми нічого не знайшли !</p>
//       )
