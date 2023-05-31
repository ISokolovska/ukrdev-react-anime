import { Outlet } from "react-router-dom";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import {
  Container,
  Header,
  HeaderInput,
  HeaderButton,
  Search,
} from "../SharedLayout/SharedLayout.styled";
import AnimeLogo from "../../images/logo.svg";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <div>
          <img src={AnimeLogo} alt="Anime Logo" />
        </div>
        <Search>
          <HeaderInput type="text" placeholder="Пошук..." />
          <HeaderButton>
            <LuSearch width="16px" height="16px" color="#FFFFFF" />
          </HeaderButton>
        </Search>
        <GiHamburgerMenu width="24px" height="24px" color="#FFFFFF" />
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
