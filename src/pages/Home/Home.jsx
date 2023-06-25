import React, { useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import TopMangaGallery from "../../components/TopMangaGallery/TopMangaGallery";
import TopAnimeGallery from "../../components/TopAnimeGallery/TopAnimeGallery";
import MangaSearch from "../../components/MangaSearch/MangaSearch";
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";
import Loader from "../../components/Loader/Loader";
import ArrowRed from "../../images/arrow.svg";
import ArrowOrange from "../../images/arrow_or.svg";
import { HomeContainer, StyledLink, TitleWrapper } from "../Home/Home.styled";
import { useGetAnimeSearchQuery } from "../../redux/animeSlice";

const Home = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: getMangaSearch,
    // error,
    // isLoading,
  } = useGetMangaSearchQuery({
    page,
    limit: perPage,
    search,
  });

  // console.log(getMangaSearch.data);

  const {
    data: getAnimeSearch,
    // error,
    // isLoading,
  } = useGetAnimeSearchQuery({
    page,
    limit: perPage,
    // search,
  });

  // const params = useLocation();
  // let search = params.search.split("=").at(-1);

  const location = useLocation().pathname.split("/");
  const backLinkHref1 = location.state?.from ?? "/top/manga";
  const backLinkHref2 = location.state?.from ?? "/top/anime";
  // const backLinkHref3 = location.state?.from ?? "/search";

  // if (error) {
  //   return <>Oh no, there was an error</>;
  // }

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <HomeContainer>
      {!search && (
        <>
          <TitleWrapper>
            <div>
              <h2>Популярна манґа</h2>
            </div>
            <StyledLink as={NavLink} to={backLinkHref1}>
              <p>Переглянути все</p>
              <img src={ArrowRed} alt="ArrowRed" />
            </StyledLink>
          </TitleWrapper>
          <TopMangaGallery />
          <TitleWrapper>
            <div className="anime__title">
              <h2>Популярне аніме</h2>
            </div>

            <StyledLink as={NavLink} to={backLinkHref2}>
              <p>Переглянути все</p>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </StyledLink>
          </TitleWrapper>
          <TopAnimeGallery />
        </>
      )}

      {/* {search &&
        (getTopManga?.data?.length && getTopAnime?.data?.length ? (
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
        ) : (
          <p style={{ color: "red" }}>Нажаль ми нічого не знайшли </p>
        ))} */}

      {search && (
        <>
          <MangaSearch />
          <AnimeSearch />
        </>
      )}
      {/* {getMangaSearch?.data?.length ? (
        <>
          <MangaSearch />
          <AnimeSearch />
        </>
      ) : (
        <p style={{ color: "red" }}>Нажаль ми нічого не знайшли </p>
      )} */}
    </HomeContainer>
  );
};

export default Home;
