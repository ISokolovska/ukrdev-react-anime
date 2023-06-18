import styled from "styled-components";

export const AnimeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 11px;
  width: 172px;
  height: 285.6px;
`;

export const AnimeImage = styled.img`
  width: 172px;
  height: 248.6px;
`;

export const AnimeImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 42px;
    height: 16px;
    background-color: var(--title-bg-orange-cl);
  }
  & > ul {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 0;
    & > li {
      display: flex;
      flex-direction: row;
      & > p {
        margin-: 0;
        margin-right: 4px;
      }
      & > img {
        width: 16px;
        height: 16px;
      }
    }
    & > li:not(:last-child) {
      margin-right: 11px;
    }
  }
`;
