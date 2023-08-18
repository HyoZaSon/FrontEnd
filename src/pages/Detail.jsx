import { useState } from "react";
import MapImg from "../img/map.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    navigate("/hyozason");
  };

  const nickName = localStorage.getItem("nickName");

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>택시 예약</Title>
          <User>{nickName}</User>
        </TitleContainer>

        <Image src={MapImg} alt="map" />
        <Button onClick={handleAccept}>수락</Button>
      </Container>
      {modal && (
        <Modal>
          <ModalContent>
            <ModalText>
              <p style={{ color: "#519872", textDecorationLine: "underline" }}>
                택시예약
              </p>
              도움 요청을 수락했습니다!
              <br />
              요청한 사람의 연락처가
              <br />
              문자로 전송될 예정입니다.
            </ModalText>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  margin-top: 20px;
  width: 500px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 25px;
  margin-right: 200px;
`;

const User = styled.div`
  font-size: 18px;
`;

const Image = styled.img`
  width: 400px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #519872;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 25px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #519872;
  color: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default Detail;
