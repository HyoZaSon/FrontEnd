import React from "react";
import styled from "styled-components";
import LoginBasicImage from "../components/LoginBasic.jpg"; // 첫 번째 버튼 이미지 파일 경로를 import
import LoginOtherImage from "../components/LoginOther.jpg"; // 두 번째 버튼 이미지 파일 경로를 import
import GlobalStyle from "../shared/GlobalStyle";
import { Mobile, PC } from "../shared/MediaQuery";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`;

// 배경을 포함한 컨테이너 스타일
const Container = styled.div`
  overflow: hidden;
  background-color: #E7F59E; // 배경 색상 설정
  width: 100vw; /* 화면 전체 너비 */
  height: 100vh; /* 화면 전체 높이 *
  align-items: center; // 가운데 정렬
  justify-content: center; // 가운데 정렬
  display: flex; // 컨테이너 안의 컨텐츠를 가운데 정렬하기 위해 flex 사용
  position: absolute;
  top: 50%; // 화면의 중간으로 올리기 위해 50%로 설정
`;

//모바일스타일 필요하면
const MobileContainer = styled(Container)`
  width: 100vw; /* 화면 전체 너비 */
  height: 100vh; /* 화면 전체 높이 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 위쪽 정렬로 변경 */
  align-items: center; /* 가운데 정렬 유지 */
  margin-top: 100px; /* 모바일에서 요소를 아래로 이동 */
`;

//PC스타일 필요하면
const PCContainer = styled(Container)``;

const Title = styled.p`
  font-size: 36px; /* 크기 조정 */
  font-family: Inter;
  text-align: center;
`;

const Statement = styled.p`
  font-size: 12px; /* 크기 조정 */
  white-space: pre-line; /* 공백과 줄바꿈 유지 */
  font-family: Inter;
  text-align: left;
`;

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; // 세로 정렬을 위해 flex-direction을 column으로 설정
  align-items: center; // 가운데 정렬
  margin-top: 20px;
`;

// 공통적인 버튼 스타일
const Button = styled.button`
  background-color: transparent; // 배경색 투명
  background-repeat: no-repeat; // 배경 이미지 반복 없음
  background-size: contain; // 이미지 적절하게 조절
  width: 300px; // 너비 설정
  height: 60px; // 높이 설정
  border: none; // 테두리 없음
  cursor: pointer;
  padding: 0; // padding 값 없음
`;

// 첫 번째 버튼 스타일
const BasicButton = styled(Button)`
  background-image: url(${LoginBasicImage}); // 첫 번째 버튼 이미지 적용
`;

// 두 번째 버튼 스타일
const OtherButton = styled(Button)`
  background-image: url(${LoginOtherImage}); // 두 번째 버튼 이미지 적용
`;

// LoginButton 컴포넌트
const LoginButton = () => {
  return (
    <Container>
      <ButtonContainer>
        <Mobile>
          <GlobalStyle /> {/* 글로벌 스타일 적용 */}
          <MobileContainer>
            {" "}
            {/* 모바일 화면에서만 적용 */}
            <Title>효자손</Title>
            <Statement>로그인 후 서비스를 이용하실 수 있습니다</Statement>{" "}
            {/* 크기 조정된 문장 */}
            <BasicButton onClick={() => window.open(KAKAO_AUTH_URL)} />{" "}
            {/* 첫 번째 버튼 */}
            <OtherButton /> {/* 두 번째 버튼 */}
          </MobileContainer>
        </Mobile>

        <PC>
          {/* PC 버전*/}
          <GlobalStyle /> {/* 글로벌 스타일 적용 */}
          <Title>효자손</Title>
          <Statement>로그인 후 서비스를 이용하실 수 있습니다</Statement>
          <BasicButton onClick={() => window.open(KAKAO_AUTH_URL)} />{" "}
          {/* 첫 번째 버튼 */}
          <OtherButton /> {/* 두 번째 버튼 */}
        </PC>
      </ButtonContainer>
    </Container>
  );
};

export default LoginButton;
