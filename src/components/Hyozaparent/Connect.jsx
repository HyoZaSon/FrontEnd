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
  height: 22vh;
  overflow-y: auto;
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
  margin-top: 15px;
`;

function Modal({ isOpen, closeModal }) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBackground />
      <ModalBox>
        <ModalText>
          <p style={{ color: "#519872" }}>연결 성공!</p> <br />
          <div>
            <span>이제 </span>
            <span style={{ color: "#519872", textDecorationLine: "underline" }}>
              효자손
            </span>
            <span>과</span>
            <p> 연락처를 공유하게 됩니다.</p>
          </div>
        </ModalText>
        <ModalBtn onClick={closeModal}>확인</ModalBtn>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
