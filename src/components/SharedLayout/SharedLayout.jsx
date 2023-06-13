import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  Header,
  HeaderInput,
  SearchIcon,
  Search,
  ButtonMenu,
} from "../SharedLayout/SharedLayout.styled";
import AnimeLogo from "../../images/logo.svg";
import Lupe from "../../images/lupe.svg";
import Menu from "../../images/menu.svg";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useGetMangaSearchQuery } from "../../redux/mangaSlice";
import usePagination from "../../hooks/usePagination";

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [mangaList, setMangaList] = useState([]);
  // const [animeList, setAnimeList] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [input, setInput] = useState(() => searchParams.get("query") ?? "");
  const params = useLocation();
  let search = params.search.split("=").at(-1);
  const { page, setPage, setTotalCount, countPage, perPage } = usePagination();

  const { data, isLoading } = useGetMangaSearchQuery({
    // page,
    // limit: perPage,
    search,
    // category,
  });
  console.log("useGetMangaSearchQuery", useGetMangaSearchQuery());

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(search);
    // setSearchParams({ query: input.trim() });
    // reset();
  };

  // const reset = () => {
  //   setInput("");
  // };

  return (
    <Container>
      <Header>
        <div>
          <img src={AnimeLogo} alt="Anime Logo" />
        </div>
        <Search
          action="submit"
          handleSearch={handleSearch}
          // search={search}
          // animeList={animeList}
          // mangaList={mangaList}
        >
          <HeaderInput
            type="text"
            placeholder="Пошук..."
            // value={input}
            // onChange={handleChange}
          />
          <SearchIcon>
            <img src={Lupe} alt="Lupe" />
          </SearchIcon>
        </Search>
        <ButtonMenu
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflow = "hidden";
          }}
        >
          <img src={Menu} alt="Menu" />
        </ButtonMenu>
        {isOpen && <ModalMenu setIsOpen={setIsOpen} />}
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
