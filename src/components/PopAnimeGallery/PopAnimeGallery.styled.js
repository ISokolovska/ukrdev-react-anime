import styled from "styled-components";

export const PopAnimeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px 14px;
  max-width: 767px;
  margin: 0 auto;
  margin-top: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  & > h2 {
    background-color: var(--title-bg-orange-cl);
  }
  & > button {
    width: 50vw;
  }
  & > button > p {
    margin-right: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;
