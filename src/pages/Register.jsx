import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import PhoneNumber from "../components/Register/PhoneNumber";
import Region from "../components/Register/Region";

const text = `효자손을 사용하기 전에\n 본인의 역할과 지역을\n 선택해주세요.`;

const Wrapper = styled.div`
  height: 95vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 50px;
  white-space: pre;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-size: 32px;
`;

export const SubTitle = styled.span`
  margin-left: 30px;
  margin-bottom: 10px;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const RoleInput = styled.input`
  display: none;

  &: checked + label {
    color: #519872;
    font-weight: 600;
  }
`;

const Role = styled.div`
  background-color: #46ca83;
  border-radius: 10px;
  width: 170px;
  height: 40px;
  margin-left: 10px;
`;

const RoleLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: #fff;
`;

const SelectBox = styled.div`
  display: flex;
  flexdirection: row;
  width: 100%;
  height: 30px;
  margin-left: 30px;
`;

export const Select = styled.select`
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #519872;
`;

const SubmitBtn = styled.button`
  margin-left: 30px;
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  background: #519872;
  border: none;
  color: #fff;
  font-size: 20px;
`;

const Register = () => {
  const [role, setRole] = useState("HELPER");
  const [region, setRegion] = useState("선택");
  const [tel, setTel] = useState("");

  const handleChecked = (e) => {
    setRole(e.target.value);
  };

  const handleSelect = (e) => {
    setRegion(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <Title>{text}</Title>
      </Container>
      <Container style={{ textAlign: "left" }}>
        <SubTitle>역할 선택</SubTitle>
        <RoleContainer>
          <Role>
            <RoleInput
              onClick={handleChecked}
              type="radio"
              name="HELPER"
              id="HELPER"
              value="HELPER"
              checked={role === "HELPER"}
            />
            <RoleLabel htmlFor="HELPER">도움을 주고 싶습니다</RoleLabel>
          </Role>
          <Role>
            <RoleInput
              onClick={handleChecked}
              type="radio"
              name="HELP"
              id="HELP"
              value="HELP"
              checked={role === "HELP"}
            />
            <RoleLabel htmlFor="HELP">도움을 받고 싶습니다</RoleLabel>
          </Role>
        </RoleContainer>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SubTitle style={{ textAlign: "left" }}>지역 선택</SubTitle>
        <SelectBox>
          <Select onChange={handleSelect}>
            <option value="">ㄱㄴㄷ 선택</option>
            <option value="ㄱ">ㄱ</option>
            <option value="ㄴ">ㄴ</option>
            <option value="ㄷ">ㄷ</option>
            <option value="ㅁ">ㅁ</option>
            <option value="ㅅ">ㅅ</option>
            <option value="ㅇ">ㅇ</option>
            <option value="ㅈ">ㅈ</option>
          </Select>
          <Region prop={region} />
        </SelectBox>
      </Container>
      <PhoneNumber />
      <SubmitBtn>회원가입 완료</SubmitBtn>
    </Wrapper>
  );
};

export default Register;
