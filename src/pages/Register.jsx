import React from "react";
import styled from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import GlobalStyle from "../shared/GlobalStyle";
import { useState } from "react";

// 배경을 포함한 컨테이너 스타일
const Container = styled.div`
  padding-left: 30px; /* 왼쪽 padding 값 추가 */
  width: 100vw; /* 화면 전체 너비 */ 
  height: 100vh; /* 화면 전체 높이 *
  overflow: hidden;
  background-color: #E7F59E; // 배경 색상 설정
  align-items: center; // 가운데 정렬
  justify-content: center; // 가운데 정렬
  display: flex; // 컨테이너 안의 컨텐츠를 가운데 정렬하기 위해 flex 사용
  position: absolute;
`;

// PC 컨테이너 스타일
const PcContainer = styled.div`
  transform: translateX(40%);
`;

// 타이틀 스타일 //타이틀 글씨
const Title = styled.span`
  color: rgba(0, 0, 0, 1);
  height: 390px;
  position: absolute;
  left: 65px;
  top: 183px;
  font-family: Inter;
  text-align: center;
  font-size: 25px;
`;

// 옵션 래퍼 스타일 //선택,지역선택
const OptionWrapper = styled.div`
  position: absolute;
  left: 33px;
  top: 405px;
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
  color: rgba(0, 0, 0, 1);
  width: 225px;
  height: 17px;
  position: absolute;
  left: 10px;
  top: 11px;
  font-family: Inter;
  text-align: left;
  font-size: 14px;
`;

// 드롭다운 메뉴 컨테이너 스타일
const DropdownMenu = styled.div`
  width: 200px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 70px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 2;
`;

// 드롭다운 메뉴 아이템 스타일
const DropdownItem = styled.div`
  width: 100%;
  height: 36px;
  padding: 10px 20px;
  font-family: Inter;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;

//드롭다운 아이콘
const CustomDropdownIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 65px; /* 원하는 위치로 조정 */
  top: 45px; /* 원하는 위치로 조정 */
`;

  // 가상의 드롭다운 메뉴 아이템 데이터
const dropdownOptions = [
  "옵션 1",
  "옵션 2",
  "옵션 3",
  // ... (필요한 만큼 아이템 추가)
];

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

// 옵션 래퍼 스타일 // 번호 입력
const NumberWrapper = styled.div`
  position: absolute;
  left: 33px;
  top: 500px;
`;

// 선택 박스 스타일
const NumberBox = styled.div`
  background-color: white;
  width: 200px;
  height: 36px;
  position: absolute;
  left: 0;
  top: 34px;
  border-radius: 10px;
`;

// 번호 입력 필드 스타일
const NumberInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 10px;
  font-family: Inter;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
`;

// 옵션 타이틀 스타일 //지역선택
const NumberTitle = styled.span`
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
  width: 100vw; /* 화면 전체 너비 */
  height: 66px;
  position: absolute;
  left: 33px;
  top: 340px;
  
`;

// 역할 타이틀 스타일 //역할선택
const RoleTitle = styled.span`
  color: rgba(0, 0, 0, 1);
  width: 118px;
  height: 20px;
  position: absolute;
  left: 6px;
  top: 0;
  font-family: Inter;
  text-align: left;
  font-size: 16px;
  top: -35px; /* 위로 이동 */
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
  left: 12px;
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
  top: 620px;
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
  
  const [selectedOption, setSelectedOption] = useState("-- 선택 --");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 메뉴 열림 여부 상태 추가

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // 옵션 선택 후 드롭다운 메뉴 닫기
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 메뉴 열기/닫기 토글
  };

  return (
    <Container>
      {/* 모바일 */}
      <Mobile>
      <GlobalStyle />
      <Title>효자손을 사용하기 전에<br />본인의 역할과 지역을<br />선택해주세요.</Title>

      <RoleWrapper>
        <RoleOption>
            <RoleText>도움을 주고 싶습니다</RoleText>
        </RoleOption>
        <RoleReceive>
            <RoleText>도움을 받고 싶습니다</RoleText>
        </RoleReceive>
        <RoleTitle>역할 선택</RoleTitle>
      </RoleWrapper>

      <OptionWrapper>
          <SelectWrapper>
            <SelectBox>
              <SelectText>{selectedOption}</SelectText>
            </SelectBox>
            {/* 드롭다운 메뉴 */}
          <CustomDropdownIcon
            src={require("../components/icon_dropdown_arrow.png")}
            alt="Dropdown Icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && ( // 드롭다운 메뉴 열림 여부에 따라 표시 여부 결정
            <DropdownMenu>
              {dropdownOptions.map((option, index) => (
                <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                  {option}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
            <OptionTitle>지역 선택</OptionTitle>
          </SelectWrapper>
        </OptionWrapper>

      <NumberWrapper>
          <NumberBox>
            <NumberInput type="text" placeholder="번호를 입력해주세요." />
          </NumberBox>        
            <NumberTitle>번호 입력</NumberTitle>
      </NumberWrapper>

      <CompleteWrapper>
        <CompleteText>회원가입 완료</CompleteText>
      </CompleteWrapper>
      </Mobile>

      {/* PC */}
      <PcContainer>
      <PC>
      <GlobalStyle />
      <Title>효자손을 사용하기 전에<br />본인의 역할과 지역을<br />선택해주세요.</Title>

      <RoleWrapper>
        <RoleOption>
            <RoleText>도움을 주고 싶습니다</RoleText>
        </RoleOption>
        <RoleReceive>
            <RoleText>도움을 받고 싶습니다</RoleText>
        </RoleReceive>
        <RoleTitle>역할 선택</RoleTitle>
      </RoleWrapper>

      <OptionWrapper>
          <SelectWrapper>
            <SelectBox>
              <SelectText>{selectedOption}</SelectText>
            </SelectBox>
            {/* 드롭다운 메뉴 */}
          <CustomDropdownIcon
            src={require("../components/icon_dropdown_arrow.png")}
            alt="Dropdown Icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && ( // 드롭다운 메뉴 열림 여부에 따라 표시 여부 결정
            <DropdownMenu>
              {dropdownOptions.map((option, index) => (
                <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                  {option}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
            <OptionTitle>지역 선택</OptionTitle>
          </SelectWrapper>
        </OptionWrapper>

      <NumberWrapper>
          <NumberBox>
            <NumberInput type="text" placeholder="번호를 입력해주세요." />
          </NumberBox>        
            <NumberTitle>번호 입력</NumberTitle>
      </NumberWrapper>

      <CompleteWrapper>
        <CompleteText>회원가입 완료</CompleteText>
      </CompleteWrapper>

      </PC>
      </PcContainer>
      </Container>
  );
};

export default Register;