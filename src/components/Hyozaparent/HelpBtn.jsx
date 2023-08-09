import { styled } from "styled-components";
import Modal from "./Modal";

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
  font-size: ${(props) => props.TfontSize};
`;
const HelpBtn = ({
  openModal,
  isModalOpen,
  closeModal,
  btnWidth,
  btnHeight,
  TfontSize,
}) => {
  return (
    <>
      <Btn onClick={openModal} btnWidth={btnWidth} btnHeight={btnHeight}>
        <TextBox TfontSize={TfontSize}>택시 예약</TextBox>
      </Btn>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content="택시 예약" />
    </>
  );
};

export default HelpBtn;
