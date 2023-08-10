import { styled } from "styled-components";
import { Mobile, PC } from "../shared/MediaQuery";
import HelpBox from "../components/Hyozaparent/HelpBox";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
`;

const Hyozaparent = () => {
  return (
    <>
      <Mobile>
        <Wrapper>
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
