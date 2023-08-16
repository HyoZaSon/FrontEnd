import { styled } from "styled-components";
import LoadingSrc from "../img/loading.gif";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Mobile, PC } from "../shared/MediaQuery";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
`;

const LoadingImg = styled.img`
  width: ${(props) => props.ImgWidth};
  height: ${(props) => props.ImgWidth};
`;

const TextBox = styled.button`
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

const LoginLoading = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const data = {
    idToken: searchParams.get("code"),
  };

  const onClick = () => {
    axios
      .post("/login", data)
      .then((response) => {
        if (response.data.message) {
          const message = response.data.message;
          const arr = message.split(" ");
          localStorage.setItem("email", arr[3]);
          localStorage.setItem("idToken", searchParams.get("code"));
          navigate("/register");
        } else {
          console.log(response.data);
          const data = response.data;
          const accessToken = data.tokenInfo.accessToken;
          const refreshToken = data.tokenInfo.refreshToken;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          if (data.userRole === "HELP") {
            navigate("/hyozaparent");
            localStorage.setItem("nickName", data.nickName);
          } else {
            navigate("/hyozason");
            localStorage.setItem("nickName", data.nickName);
            localStorage.setItem("region", data.regionInfo1);
            localStorage.setItem("reward", data.rewardScore);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Mobile>
        <Wrapper>
          <Container>
            <LoadingImg ImgWidth="100%" src={LoadingSrc} />

            <TextBox
              btnWidth="75vw"
              btnHeight="5vh"
              btnFontSize="3vw"
              onClick={onClick}
            >
              계속하기
            </TextBox>
          </Container>
        </Wrapper>
      </Mobile>
      <PC>
        <Wrapper>
          <Container>
            <LoadingImg ImgWidth="50%" src={LoadingSrc} />
            <TextBox
              btnWidth="50vw"
              btnHeight="8vh"
              btnFontSize="2vw"
              onClick={onClick}
            >
              계속하기
            </TextBox>
          </Container>
        </Wrapper>
      </PC>
    </>
  );
};

export default LoginLoading;
