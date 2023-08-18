import { styled } from "styled-components";
import LoadingSrc from "../img/loading.gif";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Hyozaparent/Modal";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
`;

const Container = styled.div`
  //align-items: center;
  text-align: center;
`;

const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  //background-color: teal;
  font-size: 22px;
`;

const Loading = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/hyozaparent/evaluation");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Wrapper>
        <Container>
          <LoadingImg src={LoadingSrc} />
          <TextBox>도움을 줄 효자손을 찾는 중입니다!</TextBox>
          <Modal
            isOpen={visible}
            closeModal={closeModal}
            isHelpLoading={false}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default Loading;
