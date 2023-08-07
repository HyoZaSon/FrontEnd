import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.svg";

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
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Contents>
        <Logo onClick={() => navigate("/")}>
          <LogoImg src={logo} />
          <LogoTxt>효자손</LogoTxt>
        </Logo>

        <Navigation>
          <ul>
            <li>이혜영</li>
          </ul>
        </Navigation>
      </Contents>
    </Wrapper>
  );
};

export default Header;
