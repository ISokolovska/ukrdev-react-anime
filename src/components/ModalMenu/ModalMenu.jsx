import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Random from "../../images/random.svg";
import Tag from "../../images/tag.svg";
import Faq from "../../images/faq.svg";
import User from "../../images/user.svg";
import { ModalWrapper, Overlay } from "./ModalMenu.styled";

const ModalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleBackDropClick = (event) => {
  //   if (event.currentTarget === event.target) {
  //     setIsOpen(!isOpen);
  //   }
  // };

  return (
    <>
      <Overlay
      // onClick={handleBackDropClick}
      >
        <ModalWrapper>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineCloseCircle />
          </button>
          <ul>
            <li>
              <img src={Random} alt="Random" />
              <p>Мені пощастить</p>
            </li>
            <li>
              <img src={Tag} alt="Tag" />
              <p>Теги</p>
            </li>
            <li>
              <img src={Faq} alt="Faq" />
              <p>FAQ</p>
            </li>
            <li>
              <img src={User} alt="User" />
              <p>Увійти / Зареєструватися</p>
            </li>
          </ul>
        </ModalWrapper>
      </Overlay>
    </>
  );
};

export default ModalMenu;
