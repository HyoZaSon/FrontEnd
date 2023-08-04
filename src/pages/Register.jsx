import React from "react";
import styled from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import GlobalStyle from "../shared/GlobalStyle"; 

// 배경을 포함한 컨테이너 스타일
const Container = styled.div`
  width: 390px; // 너비 설정
  height: 844px; // 높이 설정
  overflow: hidden;
  background-color: #E7F59E; // 배경 색상 설정
  align-items: center; // 가운데 정렬
  justify-content: center; // 가운데 정렬
  display: flex; // 컨테이너 안의 컨텐츠를 가운데 정렬하기 위해 flex 사용
  position: absolute;
  top: 50%; // 화면 중앙에서 위로 50%만큼 올림
  transform: translateY(-60%); // 중앙 정렬을 위해 위치 조정
`;

// 타이틀 스타일 //타이틀 글씨
const Title = styled.span`
  color: rgba(0, 0, 0, 1);
  width: 390px;
  height: 107px;
  position: absolute;
  left: 5px;
  top: 183px;
  font-family: Inter;
  text-align: center;
  font-size: 25px;
`;

// 옵션 래퍼 스타일 //선택,지역선택
const OptionWrapper = styled.div`
  width: 235px;
  height: 70px;
  position: absolute;
  left: 33px;
  top: 446px;
`;

// 선택 래퍼 스타일 //선택
const SelectWrapper = styled.div`
  width: 235px;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
`;

// 선택 박스 스타일
const SelectBox = styled.div`
  background-color: white;
  width: 95px;
  height: 36px;
  position: absolute;
  left: 0;
  top: 34px;
  border-radius: 10px;
`;


// 선택 텍스트 스타일 //연한회색컬러
const SelectText = styled.span`
  color: rgba(204, 204, 204, 1);
  width: 225px;
  height: 17px;
  position: absolute;
  left: 10px;
  top: 11px;
  font-family: Inter;
  text-align: left;
  font-size: 14px;
`;

// 옵션 타이틀 스타일 //지역선택
const OptionTitle = styled.span`
  color: rgba(0, 0, 0, 1);
  width: 118px;
  height: 20px;
  position: absolute;
  left: 6px;
  top: 0;
  font-family: Inter;
  text-align: left;
  font-size: 16px;
`;

// 역할 래퍼 스타일
const RoleWrapper = styled.div`
  width: 321px;
  height: 66px;
  position: absolute;
  left: 33px;
  top: 348px;
`;

// 역할 타이틀 스타일 //역할선택
const RoleTitle = styled.span`
color: rgba(0, 0, 0, 1);
width: 118px;
height: 20px;
position: absolute;
left: 6px;
top: -35px; /* 위로 이동 */
font-family: Inter;
text-align: left;
font-size: 16px;
z-index: 1; /* 층위 조정 */
`;

// 역할 도움주기 버튼 스타일
const RoleOption = styled.div`
  background-color: #46CA83;
  width: 157.24px;
  height: 37.55px;
  position: absolute;
  border-radius: 10px;
`;

// 역할 도움받기 버튼 스타일
const RoleReceive = styled.div`
  background-color: #46CA83;
  width: 157.24px;
  height: 37.55px;
  position: absolute;
  border-radius: 10px;
  left: 163.76px; //위치 버튼 옆으로 조정
`;

// 역할 도움받기,주기 선택 텍스트 스타일
const RoleText = styled.span`
  color: white;
  width: 141.43px;
  height: 17.46px;
  position: absolute;
  left: 15.82px;
  top: 10.48px;
  font-family: Inter;
  text-align: left;
  font-size: 14px;
`;


// 완료 래퍼, 버튼 스타일
const CompleteWrapper = styled.div`
  background-color: #519872;
  position: absolute;
  border-radius: 10px;
  width: 323px;
  height: 56px;
  position: absolute;
  left: 33px;
  top: 559px;
`;

// 완료 텍스트 스타일
const CompleteText = styled.span`
  color: white;
  width: 158px;
  height: 29px;
  position: absolute;
  left: 88px;
  top: 13px;
  font-family: Inter;
  text-align: left;
  font-size: 22px;
`;

// Register 컴포넌트
const Register = () => {
  return (
    <Container>
      {/* 모바일 */}
      <Mobile>
      <GlobalStyle />
      <Title>효자손을 사용하기 전에<br />본인의 역할과 지역을<br />선택해주세요.</Title>

      <OptionWrapper>
        <SelectWrapper>
          <SelectBox>
            <SelectText>-- 선택 --</SelectText>
          </SelectBox>        
          <OptionTitle>지역 선택</OptionTitle>
        </SelectWrapper>
      </OptionWrapper>

      <RoleWrapper>
        <RoleOption>
            <RoleText>도움을 주고 싶습니다</RoleText>
        </RoleOption>
        <RoleReceive>
            <RoleText>도움을 받고 싶습니다</RoleText>
        </RoleReceive>
        <RoleTitle>역할 선택</RoleTitle>
      </RoleWrapper>

      <CompleteWrapper>
        <CompleteText>회원가입 완료</CompleteText>
      </CompleteWrapper>
      </Mobile>

      {/* PC */}
      <PC>
      <GlobalStyle />
      
      <Title>효자손을 사용하기 전에<br />본인의 역할과 지역을<br />선택해주세요.</Title>

      <OptionWrapper>
        <SelectWrapper>
          <SelectBox>
            <SelectText>-- 선택 --</SelectText>
          </SelectBox>        
          <OptionTitle>지역 선택</OptionTitle>
        </SelectWrapper>
      </OptionWrapper>

      <RoleWrapper>
        <RoleOption>
            <RoleText>도움을 주고 싶습니다</RoleText>
        </RoleOption>
        <RoleReceive>
            <RoleText>도움을 받고 싶습니다</RoleText>
        </RoleReceive>
        <RoleTitle>역할 선택</RoleTitle>
      </RoleWrapper>

      <CompleteWrapper>
        <CompleteText>회원가입 완료</CompleteText>
      </CompleteWrapper>
      </PC>

    </Container>
  );
};

export default Register;
