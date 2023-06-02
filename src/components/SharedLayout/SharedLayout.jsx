import { Outlet } from "react-router-dom";
import React from "react";
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
  return (
    <Container>
      <Header>
        <div>
          <img src={AnimeLogo} alt="Anime Logo" />
        </div>
        <Search>
          <HeaderInput type="text" placeholder="Пошук..." />
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
