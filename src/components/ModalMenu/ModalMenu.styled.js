import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: "100vh";
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  /* filter: blur(4px); */
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  /* position: absolute; */
  /* top: 62%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 16px;
  /* width: "100vw"; */
  /* height: "100vh"; */
  background-color: var(--main-bg-cl);

  & > button {
    display: flex;
    margin: 0 auto;
    margin-right: 0;
    width: 24px;
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  & > ul > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    gap: 16px;
    & > p {
      font-size: 14px;
      line-height: 1.4;
      color: var(--main-text-cl);
    }
  }
`;
