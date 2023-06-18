import styled from "styled-components";

export const MangaInfoMore = styled.div`
  height: ${(props) =>
    props.className === "text-block_active" ? "auto" : "50px"};
  /* border: 1px solid var(--main-text-cl); */
  overflow: ${(props) =>
    props.className === "text-block_active" ? "visible " : "hidden"};
  font-size: 12px;
  color: var(--main-text-cl);
  & > button {
    width: 30px;
    height: 30px;
    color: var(--main-text-cl);
    border: 1px solid var(--main-text-cl);
    /* overflow: ${(props) =>
      props.className === "more" ? "visible" : "hidden"}; */
  }
  /* 
  .text-block {
    width: 150px;

    border: 1px solid var(--main-text-cl);
    overflow: hidden;
  }

  .text-block:hover {
    cursor: pointer;
  }

  .text-block_active {blo
    height: auto;
  } */
`;
