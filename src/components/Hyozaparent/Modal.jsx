import { styled } from "styled-components";
import ModalHelp from "./ModalHelp";
import ModalLoading from "./ModalLoading";

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  overflow-y: hidden;
  background-color: white;
`;

const ModalText = styled.div`
  padding: 10px;
  color: #000;
  line-height: 0.5em;
`;

const ModalBtn = styled.button`
  width: 100%;
  height: 30%;
  color: #fff;
  background: #519872;
  outline: none;
  border: none;
  cursor: pointer;
`;

function Modal({ isOpen, closeModal, content, isHelpLoading }) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBackground />
      <ModalBox>
        <ModalText>
          {isHelpLoading ? <ModalHelp content={content} /> : <ModalLoading />}
        </ModalText>
        <ModalBtn onClick={closeModal}>확인</ModalBtn>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
