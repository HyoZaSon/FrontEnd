import { styled } from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import { useState } from "react";
import Modal from "../components/Hyozaparent/Modal";
import { useNavigate } from "react-router-dom";

const text = "어떤 도움이 필요하신가요?\n아래 버튼을 선택해주세요!";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
`;

const HeadBox = styled.div`
  margin: 10px 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  white-space: pre-wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 30px;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #519872;
  border-radius: 10px;
  color: white;
  width: ${(props) => props.btnWidth};
  height: ${(props) => props.btnHeight};
  margin-bottom: 27px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.fontSize};
`;

const Hyozaparent = () => {
  const navigate = useNavigate();

  const [isTaxiModalOpen, setIsTaxiModalOpen] = useState(false);
  const [isBusModalOpen, setIsBusModalOpen] = useState(false);
  const [isTrainModalOpen, setIsTrainModalOpen] = useState(false);

  const openTaxiModal = () => setIsTaxiModalOpen(true);
  const closeModal = () => {
    navigate("/hyozaparent/loading");
  };
  const openBusModal = () => setIsBusModalOpen(true);
  const openTrainModal = () => setIsTrainModalOpen(true);

  return (
    <>
      <Mobile>
        <Wrapper>
          <HeadBox fontSize="5vw">{text}</HeadBox>
          <Btn onClick={openTaxiModal} btnWidth="70vw" btnHeight="20vh">
            <TextBox fontSize="7vw">택시 예약</TextBox>
          </Btn>
          <Modal
            isOpen={isTaxiModalOpen}
            closeModal={closeModal}
            content="택시 예약"
          />
          <Btn onClick={openBusModal} btnWidth="70vw" btnHeight="20vh">
            <TextBox fontSize="7vw">버스 예매</TextBox>
          </Btn>
          <Modal
            isOpen={isBusModalOpen}
            closeModal={closeModal}
            content="버스 예매"
          />
          <Btn onClick={openTrainModal} btnWidth="70vw" btnHeight="20vh">
            <TextBox fontSize="7vw">기차 예매</TextBox>
          </Btn>
          <Modal
            isOpen={isTrainModalOpen}
            closeModal={closeModal}
            content="기차 예매"
          />
        </Wrapper>
      </Mobile>
      <PC>
        <Wrapper>
          <HeadBox fontSize="3vw">{text}</HeadBox>
          <Container>
            <Btn onClick={openTaxiModal} btnWidth="20vw" btnHeight="40vh">
              <TextBox fontSize="3vw">택시 예약</TextBox>
            </Btn>
            <Modal
              isOpen={isTaxiModalOpen}
              closeModal={closeModal}
              content="택시 예약"
            />
            <Btn onClick={openBusModal} btnWidth="20vw" btnHeight="40vh">
              <TextBox fontSize="3vw">버스 예매</TextBox>
            </Btn>
            <Modal
              isOpen={isBusModalOpen}
              closeModal={closeModal}
              content="버스 예매"
            />
            <Btn onClick={openTrainModal} btnWidth="20vw" btnHeight="40vh">
              <TextBox fontSize="3vw">기차 예매</TextBox>
            </Btn>
            <Modal
              isOpen={isTrainModalOpen}
              closeModal={closeModal}
              content="기차 예매"
            />
          </Container>
        </Wrapper>
      </PC>
    </>
  );
};

export default Hyozaparent;
