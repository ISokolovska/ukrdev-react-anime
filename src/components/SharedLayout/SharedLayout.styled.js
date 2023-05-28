import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /* max-width: 480px; */
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  background-color: var(--main-bg-cl);
`;

export const Search = styled.div`
  padding: 4px 15px;
  width: 208px;
  height: 24px;
  border-radius: 100px;
  color: var(--secondary-bg-cl);
`;
