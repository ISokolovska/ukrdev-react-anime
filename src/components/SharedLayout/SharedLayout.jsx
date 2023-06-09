import { Outlet, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  Header,
  HeaderInput,
  SearchIcon,
  Search,
} from "../SharedLayout/SharedLayout.styled";
import AnimeLogo from "../../images/logo.svg";
import Lupe from "../../images/lupe.svg";
import Menu from "../../images/menu.svg";

const SharedLayout = () => {
  const [search, setSearch] = useSearchParams();
  const [input, setInput] = useState(() => search.get("query") ?? "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch({ query: input.trim() });
    reset();
  };

  const reset = () => {
    setInput("");
  };

  return (
    <Container>
      <Header>
        <div>
          <img src={AnimeLogo} alt="Anime Logo" />
        </div>
        <Search action="submit" onSubmit={handleSearch}>
          <HeaderInput
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={handleChange}
          />
          <SearchIcon>
            <img src={Lupe} alt="Lupe" />
          </SearchIcon>
        </Search>
        <img src={Menu} alt="Menu" />
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
