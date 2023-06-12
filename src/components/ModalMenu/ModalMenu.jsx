import React from "react";
// import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Random from "../../images/random.svg";
import Tag from "../../images/tag.svg";
import Faq from "../../images/faq.svg";
import User from "../../images/user.svg";
import { ModalWrapper, ModalBody } from "./ModalMenu.styled";
import { useState } from "react";

const ModalMenu = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleBackDropClick = (event) => {
  //   if (event.currentTarget === event.target) {
  //     setIsOpen(!isOpen);
  //   }
  // };

  return (
    <>
      <ModalWrapper
      // onClick={handleBackDropClick}
      >
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => {
              setIsOpen(isOpen);
            }}
          >
            <AiOutlineCloseCircle />
          </button>
          <ul>
            <li>
              <img src={Random} alt="Random" />
              <a>Мені пощастить</a>
            </li>
            <li>
              <img src={Tag} alt="Tag" />
              <a>Теги</a>
            </li>
            <li>
              <img src={Faq} alt="Faq" />
              <a>FAQ</a>
            </li>
            <li>
              <img src={User} alt="User" />
              <a>Увійти / Зареєструватися</a>
            </li>
          </ul>
        </ModalBody>
      </ModalWrapper>
    </>
  );
};

export default ModalMenu;
