import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 33px;
    background-color: var(--title-bg-red-cl);
  }
  & .anime__title {
    background-color: var(--title-bg-orange-cl);
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 44%;

  & > p {
    margin-right: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;
