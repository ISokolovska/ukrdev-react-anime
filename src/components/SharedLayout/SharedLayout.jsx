import React, { useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
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

const SharedLayout = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const params = useLocation();
  let search = decodeURI(params.search).split("=").at(-1);

  const handleSearch = (e) => {
    e.preventDefault();
    // const { value } = e.target;
    console.log(search);
    // setSearchParams({ search: value });
    // reset();
  };

  const onInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log({ value });
    setSearchParams({ search: value });
    // reset();
  };

  // const reset = () => {
  //   setInput("");
  // };

  return (
    <Container>
      <Header>
        <Link to={backLinkHref}>
          <img src={AnimeLogo} alt="Anime Logo" />
        </Link>
        <Search handleSearch={handleSearch}>
          <HeaderInput
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={onInputChange}
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
