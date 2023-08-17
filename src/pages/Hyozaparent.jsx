import { styled } from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import HelpBox from "../components/Hyozaparent/HelpBox";
import { EventSourcePolyfill } from "event-source-polyfill";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
`;

const BASE_URL = "http://localhost:8082";
const Hyozaparent = () => {
  const [eventSource, setEventSource] = useState(null);
  const [helpBoardId, setHelpId] = useState(null);

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

  const requestHelp = async () => {
    try {
      const response = await axios.post(
        `/help/helprequest/requestHelp`,
        {
          helpName: "예시",
          helpCategory: "카테고리",
          helpAccept: "수락여부",
          locationInfo: "위치 정보",
          region_2depth_name: "동",
          region_3depth_name: "읍,면,동",
          mountain_yn: "산 유무",
          main_address_no: "주소 번호(주)",
          sub_address_no: "주소 번호(부)",
          zip_code: "우편번호",
        },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"), // 실제 토큰 값을 사용해야 합니다.
          },
        }
      );

      if (response.status === 200) {
        console.log("도움 요청 성공");
        setHelpId(response.data.helpBoardId);
      } else {
        console.error("도움 요청 실패");
      }
    } catch (error) {
      console.error("도움 요청 중 오류: ", error);
    }
  };

  const acceptHelp = () => {
    axios
      .post(
        `/help/helprequest/acceptHelp/${helpBoardId}`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: localStorage.getItem("accessToken"), // 실제 토큰 값을 사용해야 합니다.
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("도움 수락 성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("도움 수락 실패");
      });
  };

  // const acceptHelp = async (helpBoardId) => {
  //   try {
  //     const response = await axios.post(
  //       `/help/helprequest/acceptHelp/${helpBoardId}`,
  //       {},
  //       {
  //         withCredentials: true,
  //         headers: {
  //           Authorization: localStorage.getItem("accessToken"), // 실제 토큰 값을 사용해야 합니다.
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("도움 수락 성공");
  //     } else {
  //       console.error("도움 수락 실패");
  //     }
  //   } catch (error) {
  //     console.error("도움 수락 중 오류: ", error);
  //   }
  // };

  return (
    <>
      <Mobile>
        <Wrapper>
          <button onClick={requestHelp}>도움 요청</button>
          <button onClick={acceptHelp}>도움 수락</button>
          <HelpBox
            HfontSize={"5vw"}
            btnWidth={"70vw"}
            btnHeight={"20vh"}
            TfontSize={"7vw"}
          />
        </Wrapper>
      </Mobile>
      <PC>
        <Wrapper>
          <button onClick={requestHelp}>도움 요청</button>
          <button onClick={acceptHelp}>도움 수락</button>
          <HelpBox
            HfontSize={"3vw"}
            btnWidth={"20vw"}
            btnHeight={"40vh"}
            TfontSize={"3vw"}
            display={"flex"}
            flexDirection={"row"}
          />
        </Wrapper>
      </PC>
    </>
  );
};

export default Hyozaparent;
