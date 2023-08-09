import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import HelpBtn from "./HelpBtn";

const text = "어떤 도움이 필요하신가요?\n아래 버튼을 선택해주세요!";

const HeadBox = styled.div`
  margin: 10px 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${(props) => props.HfontSize};
  font-weight: 600;
  white-space: pre-wrap;
`;

const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  margin-top: 30px;
  gap: 30px;
`;

function getSuccess(position) {
  let x = position.coords.longitude;
  let y = position.coords.latitude;
  if (x && y) {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
          },
        }
      )
      .then((result) => {
        //법정동 기준으로 동단위의 값을 가져온다
        //let location = result.documents[0].region_3depth_name;
        console.log(result.request.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// 가지오기 실패(거부)
function getError() {
  alert("Geolocation Error");
}

const HelpBox = ({
  HfontSize,
  btnWidth,
  btnHeight,
  TfontSize,
  display,
  flexDirection,
}) => {
  const navigate = useNavigate();

  const [isTaxiModalOpen, setIsTaxiModalOpen] = useState(false);
  const [isBusModalOpen, setIsBusModalOpen] = useState(false);
  const [isTrainModalOpen, setIsTrainModalOpen] = useState(false);

  const openTaxiModal = () => setIsTaxiModalOpen(true);
  const openBusModal = () => setIsBusModalOpen(true);
  const openTrainModal = () => setIsTrainModalOpen(true);

  const closeModal = () => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
    navigate("/hyozaparent/loading");
  };
  return (
    <>
      <HeadBox HfontSize={HfontSize}>{text}</HeadBox>
      <Container display={display} flexDirection={flexDirection}>
        <HelpBtn
          openModal={openTaxiModal}
          isModalOpen={isTaxiModalOpen}
          closeModal={closeModal}
          btnWidth={btnWidth}
          btnHeight={btnHeight}
          TfontSize={TfontSize}
          content="택시 예약"
        />
        <HelpBtn
          openModal={openBusModal}
          isModalOpen={isBusModalOpen}
          closeModal={closeModal}
          btnWidth={btnWidth}
          btnHeight={btnHeight}
          TfontSize={TfontSize}
          content="버스 예매"
        />
        <HelpBtn
          openModal={openTrainModal}
          isModalOpen={isTrainModalOpen}
          closeModal={closeModal}
          btnWidth={btnWidth}
          btnHeight={btnHeight}
          TfontSize={TfontSize}
          content="기차 예매"
        />
      </Container>
    </>
  );
};

export default HelpBox;
