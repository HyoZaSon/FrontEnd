import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const LoginLoading = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const data = {
    idToken: searchParams.get("code"),
  };

  useEffect(() => {
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
  }, []);

  return <></>;
};

export default LoginLoading;
