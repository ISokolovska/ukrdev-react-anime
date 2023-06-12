import styled from "styled-components";
import { device } from "../../stylesheets/styled";

export const ModalWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ModalBody = styled.div`
  display: grid;
  width: 100%;
  height: 200px;
  padding: 16px;
  background-color: var(--main-bg-cl);

  @media ${device.mobileM} {
    width: 390px;
  }

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
    & > a {
      font-size: 14px;
      line-height: 1.4;
      color: var(--main-text-cl);
    }
  }
`;
