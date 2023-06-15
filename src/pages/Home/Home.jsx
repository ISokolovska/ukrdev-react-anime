import React from "react";
// import { useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
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
  // console.log(setIsLoading);
  const params = useLocation();
  let search = params.search.split("=").at(-1);
  console.log("search", search);
  // const navigate = useNavigate();
  const location = useLocation().pathname.split("/");
  const backLinkHref1 = location.state?.from ?? "/topmanga";
  const backLinkHref2 = location.state?.from ?? "/topanime";
  const backLinkHref3 = location.state?.from ?? "/search";

  // const [, setSearchParams] = useSearchParams();

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const query = e.target[0].value;
  //   // console.log("query", query);
  //   setSearchParams(() => query);
  // };

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

      {search && (
        <>
          <StyledLink
            as={NavLink}
            to={backLinkHref3}
            style={{ justifyContent: "flex-start" }}
          >
            <p>Переглянути все</p>
            <img src={ArrowRed} alt="ArrowRed" />
          </StyledLink>
          {/* <SearchResults /> */}
          <MangaSearch
          // handleSearch={handleSearch}
          />
          <AnimeSearch />
        </>
      )}
    </main>
  );
};

export default Home;
