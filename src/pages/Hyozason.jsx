import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import { useEffect, useState } from "react";
import axios from "axios";

const Hyozason = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [helpArticles, setHelpArticles] = useState([]);

  useEffect(() => {
    const region_2depth_name = "USER_REGION";

    axios
      .get(
        `http://localhost:8082/help/read?region_2depth_name=${region_2depth_name}`
      )
      .then((response) => {
        //console.log(response.data);
        setHelpArticles(response.data);
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching help articles:", error);
      });
  }, []);

  const filteredHelpArticles = helpArticles.filter(
    (article) => article.locationInfo === userData.regionInfo1
  );

  return (
    <>
      <Title>
        {userData ? `${userData.regionInfo1}구의 도움 요청서` : "Loading..."}
      </Title>
      <Mobile>
        <ButtonContainer>
          {filteredHelpArticles.map((article) => (
            <Button
              key={article.helpId}
              onClick={() => navigate(`/hyozason/${article.helpId}`)}
            >
              {article.helpName}
            </Button>
          ))}
        </ButtonContainer>
      </Mobile>
      <PC>
        <ButtonContainer>
          {filteredHelpArticles.map((article) => (
            <Button
              key={article.helpId}
              onClick={() => navigate(`/hyozason/${article.helpId}`)}
            >
              {article.helpName}
            </Button>
          ))}
        </ButtonContainer>
      </PC>
    </>
  );
};

const Title = styled.div`
  font-size: 26px;
  text-align: center;
  margin-top: 120px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 22px;
  background-color: #519872;
  border: none;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;

export default Hyozason;
