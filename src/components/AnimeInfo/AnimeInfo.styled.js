import styled from "styled-components";

export const InfoCard = styled.div`
  .anime-info__title {
    display: flex;
    margin: 0 auto;
    margin-bottom: 8px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    padding: 5px;
    background-color: var(--title-bg-orange-cl);
  }

  & > img {
    display: flex;
    margin: 0 auto;
    width: 210px;
    height: 300px;
    margin-bottom: 12px;
  }
  & > h2 {
    text-align: center;
    margin-bottom: 8px;
  }
  & > p {
    text-align: start;
    margin-bottom: 8px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InfoText = styled.div`
  text-align: justify;
  height: ${(props) => (props.className === "text-block" ? "50px" : "auto")};
  overflow: ${(props) =>
    props.className === "text-block" ? "hidden" : "visible"};
  font-size: 12px;
  color: var(--main-text-cl);
`;

export const ButtonInfo = styled.button`
  margin-right: 0;
  width: 30px;
  height: 30px;
  color: var(--main-text-cl);
  border: 1px solid var(--main-text-cl);
`;
