import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

const Wrapper = styled.div`
  height: 95vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 0 auto;
`;

const Container = styled.div`
  margin: auto 0;
  text-align: center;
`;

const Stars = styled.div`
  margin: 20px 0;
  text-align: center;
  padding-top: 5px;
  & svg {
    color: gray;
    cursor: pointer;
  }
  :hover svg {
    color: #fcc419;
  }
  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #fcc419;
  }
`;

const Label = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin-top: 0.5vh;
`;

const Btn = styled.button`
  background-color: #519872;
  border-radius: 10px;
  color: white;
  width: 75vw;
  height: 5vh;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 5vw;
  font-weight: 500;
`;

const Evaluation = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  // 별 클릭하는 함수
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    // 별점 click 하면 review를 등록한다
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    console.log(score);
  };

  return (
    <Wrapper>
      <Container>
        <Label>충분한 도움이 되셨나요?</Label>
        <Label>별점을 통해 평가를 남겨주세요!</Label>
        <Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="50"
                onClick={() => handleStarClick(el)}
                className={clicked[el] && "yellowStar"}
              />
            );
          })}
        </Stars>
        <Btn>평가하기</Btn>
      </Container>
    </Wrapper>
  );
};

export default Evaluation;
