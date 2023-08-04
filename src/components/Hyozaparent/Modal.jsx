import { styled } from "styled-components";

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
  height: 15vh;
  overflow-y: auto;
  background-color: white;
`;

const ModalText = styled.div`
  padding: 10px;
  color: #000;
  //text-decoration-line: underline;
  //white-space: pre-line;
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
  margin-top: 5px;
`;

function Modal({ isOpen, closeModal, content }) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBackground />
      <ModalBox>
        <ModalText>
          <p style={{ color: "#519872", textDecorationLine: "underline" }}>
            {content}
          </p>
          <p>도움 요청이 완료되었습니다.</p>
        </ModalText>
        <ModalBtn onClick={closeModal}>확인</ModalBtn>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
