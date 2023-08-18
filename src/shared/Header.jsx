import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.svg";
import axios from "axios";

const Wrapper = styled.header`
  background-color: rgba(252, 251, 251, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
`;

const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: 1vw;
  margin-right: auto;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 35px;
  margin-right: 15px;
`;

const LogoTxt = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Navigation = styled.nav`
  margin-right: 1vw;
  ul {
    display: flex;
    list-style: none;
    li + li {
      margin-left: 30px;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 10px;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    if (location.pathname === "/hyozason") {
      navigate("/hyozason");
    } else if (location.pathname === "/hyozaparent") {
      navigate("/hyozaparent");
    } else {
      navigate("/FrontEnd");
    }
  };

  const onClickLogout = () => {
    // axios
    //   .get("/user/logout", {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.clear();
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    alert("로그아웃 되었습니다!");
    localStorage.clear();
    navigate("/FrontEnd");
  };

  return (
    <Wrapper>
      <Contents>
        <Logo onClick={onClick}>
          <LogoImg src={logo} />
          <LogoTxt>효자손</LogoTxt>
        </Logo>

        <Navigation>
          <ul>
            {localStorage.getItem("accessToken") !== null ? (
              location.pathname === "/hyozason" ? (
                <>
                  <li>{localStorage.getItem("nickName")}</li>
                  <li>{localStorage.getItem("reward")}P</li>
                  <li>
                    <Button onClick={onClickLogout}>로그아웃</Button>
                  </li>
                </>
              ) : (
                <>
                  <li>{localStorage.getItem("nickName")}</li>

                  <li>
                    <Button onClick={onClickLogout}>로그아웃</Button>
                  </li>
                </>
              )
            ) : null}
          </ul>
        </Navigation>
      </Contents>
    </Wrapper>
  );
};

export default Header;
