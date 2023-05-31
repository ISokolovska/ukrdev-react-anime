import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  padding: 16px;
  background-color: var(--main-bg-cl);
  & > img {
    width: "48px";
    height: "48px";
  }
`;

export const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 178px;
  padding: 4px 15px;
`;

export const HeaderInput = styled.input`
  display: block;
  align-items: center;
  border: none;
  background-color: var(--main-bg-cl);
  color: var(--secondary-bg-cl);
  &:focus {
    outline: none;
  }
`;

export const HeaderButton = styled.button`
  position: absolute;
  top: 25%;
  right: 0;
  margin: 0;
  width: "16px";
  height: "16px";
  text-align: center;
  line-height: 16px;
  border: none;
  background: none;
  margin-right: 15px;
  & > LuSearch {
    vertical-align: middle;
  }
`;
