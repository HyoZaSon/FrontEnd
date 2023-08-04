import MapImg from "../img/map.png";
import styled from "styled-components";

const Detail = () => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>택시 예약</Title>
          <User>000님</User>
        </TitleContainer>

        <Image src={MapImg} alt="map" />
        <Button>수락</Button>
      </Container>
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

export default Detail;
