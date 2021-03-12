import styled from "styled-components";
import theme from "styles/theme";
import { animated } from "react-spring";

const ShowMoreContainer = styled(animated.div)`
  .show-more-button-align {
    margin: 20px 0 10px 0;
    cursor: pointer;
    color: ${theme.body.colorSecondary};
    text-align: ${({ buttontextalign }) => buttontextalign};
    button {
      margin: ${({ buttontextalign }) => {
        switch (buttontextalign) {
          case "center":
            return "0 auto";
          default:
            return "0 auto";
        }
      }};
    }
    svg {
      margin: 0 10px;
    }
  }
`;

const ShowMoreText = styled(animated.div)`
  display: flex;
  overflow: hidden;
  //align-items: center;
  flex-direction: column;
  border: ${({ border }) => border};

  & > p {
    margin: 0;
    padding: ${({ padding }) => padding};
    color: ${({ color }) => (color ? color : "#202020")};
  }
`;

export { ShowMoreContainer, ShowMoreText };
