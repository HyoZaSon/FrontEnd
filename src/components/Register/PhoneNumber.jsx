import { useState } from "react";
import { styled } from "styled-components";
import { SubTitle } from "../../pages/Register";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  margin-left: 30px;
`;

const PhoneInput = styled.input`
  width: 200px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #519872;
  border-radius: 5px;
  margin-top: 10px;
`;

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    let formattedNumber = "";

    if (phoneNumber.length < 4) {
      return phoneNumber;
    }

    formattedNumber += phoneNumber.substr(0, 3);

    if (phoneNumber.length < 7) {
      formattedNumber += "-";
      formattedNumber += phoneNumber.substr(3);
    } else {
      formattedNumber += "-";
      formattedNumber += phoneNumber.substr(3, 4);
      formattedNumber += "-";
      formattedNumber += phoneNumber.substr(7);
    }

    return formattedNumber;
  };

  const handlePhoneInput = (e) => {
    const { value } = e.target;
    const formattedPhoneNumber = formatPhoneNumber(value);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <Container>
      <span style={{ textAlign: "left" }}>전화번호 입력</span>
      <PhoneInput
        type="text"
        value={phoneNumber}
        onChange={handlePhoneInput}
        placeholder="전화번호 입력"
        maxLength="13"
      />
    </Container>
  );
};

export default PhoneNumber;
