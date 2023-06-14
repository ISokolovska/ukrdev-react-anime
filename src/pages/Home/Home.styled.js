import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

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
