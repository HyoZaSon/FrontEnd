import { styled } from "styled-components";
import LoadingSrc from "../img/loading.png";
import { useEffect, useState } from "react";
import Connect from "../components/Hyozaparent/Connect";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const Container = styled.div`
  //align-items: center;
  text-align: center;
`;

const LoadingImg = styled.img`
  width: 70%;
  height: 70%;
`;

const TextBox = styled.div`
  //background-color: teal;
  font-size: 24px;
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
          <Connect isOpen={visible} closeModal={closeModal} />
        </Container>
      </Wrapper>
    </>
  );
};

export default Loading;
