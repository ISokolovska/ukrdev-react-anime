import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  & > button {
    width: 50%;
  }
  & > button > p {
    margin-right: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
  & .anime__title > h2 {
    background-color: var(--title-bg-orange-cl);
  }
`;
