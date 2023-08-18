import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import axios from "axios";

const ARRAY = [0, 1, 2, 3, 4];

const Wrapper = styled.div`
  height: 95vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 0 auto;
  gap: 50px;
`;

const Container = styled.div`
  margin: auto 0;
  text-align: center;
`;

const Stars = styled.div`
  margin: ${(props) => props.starMarginTop};
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
  font-size: ${(props) => props.labelFontSize};
  text-align: center;
  font-weight: 600;
  margin-top: ${(props) => props.labelMarginTop};
`;

const Btn = styled.button`
  background-color: #519872;
  border-radius: 10px;
  color: white;
  width: ${(props) => props.btnWidth};
  height: ${(props) => props.btnHeight};
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.btnFontSize};
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

  const navigate = useNavigate();
  const onClick = () => {
    let score = clicked.filter(Boolean).length;
    const url = `/help/reward?rating=${score}`;
    axios
      .get(url, {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      })
      .then((response) => {
        console.log(response);
        navigate("/hyozaparent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Container>
        <Mobile>
          <Label labelFontSize="5vw" labelMarginTop="0.5vh">
            충분한 도움이 되셨나요?
          </Label>
          <Label labelFontSize="5vw" labelMarginTop="0.5vh">
            별점을 통해 평가를 남겨주세요!
          </Label>
          <Stars starMarginTop="2vh">
            {ARRAY.map((el, idx) => {
              return (
                <FaStar
                  key={idx}
                  size="10vw"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && "yellowStar"}
                />
              );
            })}
          </Stars>
          <Btn
            btnWidth="75vw"
            btnHeight="5vh"
            btnFontSize="3vw"
            onClick={onClick}
          >
            평가하기
          </Btn>
        </Mobile>

        <PC>
          <Label labelFontSize="2vw" labelMarginTop="-30vh">
            충분한 도움이 되셨나요?
          </Label>
          <Label labelFontSize="2vw" labelMarginTop="0.5vh">
            별점을 통해 평가를 남겨주세요!
          </Label>
          <Stars starMarginTop="3vh">
            {ARRAY.map((el, idx) => {
              return (
                <FaStar
                  key={idx}
                  size="5vw"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && "yellowStar"}
                />
              );
            })}
          </Stars>
          <Btn
            btnWidth="50vw"
            btnHeight="8vh"
            btnFontSize="2vw"
            onClick={onClick}
          >
            평가하기
          </Btn>
        </PC>
      </Container>
    </Wrapper>
  );
};

export default Evaluation;
