import { useState } from "react";
import { Select } from "../../pages/Register";

localStorage.setItem("region", "마포구");

const Regions = {
  선택: [""],
  ㄱ: [
    "강남구",
    "강동구",
    "강서구",
    "강북구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
  ],
  ㄴ: ["노원구"],
  ㄷ: ["동대문구", "도봉구", "동작구"],
  ㅁ: ["마포구"],
  ㅅ: ["서대문구", "성동구", "성북구", "서초구", "송파구"],
  ㅇ: ["영등포구", "용산구", "양천구", "은평구"],
  ㅈ: ["종로구", "중구", "중랑구"],
};

const Region = ({ prop, role }) => {
  const initial = prop;

  const onChange = (e) => {
    localStorage.setItem("region", e.target.value);
  };

  return (
    <>
      <Select
        disabled={role === "HELP"}
        style={{ width: "100px" }}
        onChange={onChange}
        required
      >
        <option>구 선택</option>
        {Regions[initial].map((region, idx) => (
          <option key={idx} value={region}>
            {region}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Region;
