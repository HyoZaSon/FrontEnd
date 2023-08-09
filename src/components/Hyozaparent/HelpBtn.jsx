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
  content,
}) => {
  return (
    <>
      <Btn onClick={openModal} btnWidth={btnWidth} btnHeight={btnHeight}>
        <TextBox TfontSize={TfontSize}>{content}</TextBox>
      </Btn>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={content}
        isHelpLoading={true}
      />
    </>
  );
};

export default HelpBtn;
