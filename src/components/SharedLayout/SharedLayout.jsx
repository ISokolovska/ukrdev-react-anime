import { Outlet } from "react-router-dom";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { Search } from "../SharedLayout/SharedLayout.styled";

import { Container, Header } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Search>
          <input type="text" placeholder="Пошук..." />
          <LuSearch />
        </Search>
        <GiHamburgerMenu color="red" />
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
