import React, { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
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

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const debouncedValue = useDebounce(input, 500);
  const [, setSearchParams] = useSearchParams();

  const onInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // console.log({ value });
    setInput(value);
  };

  useEffect(() => {
    setSearchParams({ search: debouncedValue });
  }, [debouncedValue, setSearchParams]);

  return (
    <Container className="font-segoe-ui">
      <Header>
        <Link to={backLinkHref}>
          <img src={AnimeLogo} alt="Anime Logo" />
        </Link>
        <Search>
          <HeaderInput
            type="text"
            placeholder="Пошук..."
            value={input}
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
