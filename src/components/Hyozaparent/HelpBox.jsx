import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { EventSourcePolyfill } from "event-source-polyfill";
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

const BASE_URL = "http://localhost:8082";

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
        const address = result.data.documents[0].address;
        localStorage.setItem("locationInfo", address.region_1depth_name);
        localStorage.setItem("region_2depth_name", address.region_2depth_name);
        localStorage.setItem("region_3depth_name", address.region_3depth_name);
        localStorage.setItem("mountain_yn", address.mountain_yn);
        localStorage.setItem("main_address_no", address.main_address_no);
        localStorage.setItem("sub_address_no", address.sub_address_no);
        if (address.zip_code !== "") {
          localStorage.setItem("zip_code", address.zip_code);
        } else {
          localStorage.setItem("zip_code", "1234");
        }
        //법정동 기준으로 동단위의 값을 가져온다
        //let location = result.documents[0].region_3depth_name;
        console.log(result.data.documents[0].address);
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
  const [eventSource, setEventSource] = useState(null);
  const [helpBoardId, setHelpId] = useState(null);
  const [region, setRegion] = useState({
    helpName: "도움 요청합니다",
    helpCategory: localStorage.getItem("category"),
    helpAccept: "Loading",
    locationInfo: "위치 정보",
    region_2depth_name: "동",
    region_3depth_name: "읍,면,동",
    mountain_yn: "산 유무",
    main_address_no: "주소 번호(주)",
    sub_address_no: "주소 번호(부)",
    zip_code: "우편번호",
  });
  const requestHelp = async () => {
    try {
      const response = await axios.post(
        `/help/helprequest/requestHelp`,
        {
          helpName: "도움 요청합니다",
          helpCategory: localStorage.getItem("category"),
          helpAccept: "Loading",
          locationInfo: localStorage.getItem("locationInfo"),
          region_2depth_name: localStorage.getItem("region_2depth_name"),
          region_3depth_name: localStorage.getItem("region_3depth_name"),
          mountain_yn: localStorage.getItem("mountain_yn"),
          main_address_no: localStorage.getItem("main_address_no"),
          sub_address_no: localStorage.getItem("sub_address_no"),
          zip_code: localStorage.getItem("zip_code"),
        },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"), // 실제 토큰 값을 사용해야 합니다.
          },
        }
      );

      if (response.status === 200) {
        console.log("도움 요청 성공");
        //setHelpId(response.data.helpBoardId);
        localStorage.setItem("helpBoardId", response.data.helpBoardId);
      } else {
        console.error("도움 요청 실패");
      }
    } catch (error) {
      console.error("도움 요청 중 오류: ", error);
    }
  };

  useEffect(() => {
    // 연결을 설정합니다.
    const EventSource = EventSourcePolyfill;
    const es = new EventSource(`${BASE_URL}/help/helprequest/connect`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
      withCredentials: true,
    });

    // 이벤트 리스너를 등록합니다.
    es.onopen = (event) => console.log("Connected: ", event);
    es.onerror = (event) => console.error("Error: ", event);
    es.addEventListener("connect", (event) =>
      console.log("Connected event received: ", event)
    );
    es.addEventListener("helpAcceptStatus", (event) =>
      console.log("Help accept status received: ", event)
    );
    es.addEventListener("newHelpRequest", (event) =>
      console.log("New help request received: ", event)
    );

    es.addEventListener("connect", (e) => {
      const { data: receivedConnectData } = e;

      console.log("connect event data: ", receivedConnectData);
    });

    es.addEventListener("message", (e) => {
      console.log(e);
    });

    es.addEventListener("error", (e) => {
      if (e) {
        console.log(e);
      }
    });
    setEventSource(es);
    // 컴포넌트가 언마운트될 때, 연결을 정리합니다.

    return () => {
      es.close();
    };
  }, []);
  const navigate = useNavigate();

  const [isTaxiModalOpen, setIsTaxiModalOpen] = useState(false);
  const [isBusModalOpen, setIsBusModalOpen] = useState(false);
  const [isTrainModalOpen, setIsTrainModalOpen] = useState(false);

  const openTaxiModal = () => setIsTaxiModalOpen(true);
  const openBusModal = () => setIsBusModalOpen(true);
  const openTrainModal = () => setIsTrainModalOpen(true);

  const closeModal = ({ content }) => {
    localStorage.setItem("category", content);
    navigator.geolocation.getCurrentPosition(getSuccess, getError);

    requestHelp();
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
