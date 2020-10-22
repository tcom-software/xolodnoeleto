import styled from "styled-components";
import theme from "styles/theme";
import { animated } from "react-spring";

const ShowMoreContainer = styled(animated.div)`
  & > div:nth-of-type(2) {
    margin: 10px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: ${theme.body.colorSecondary};

    svg {
      margin: 0 10px;
    }
  }
`;

const ShowMoreText = styled(animated.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  border: ${({ border }) => border};

  & > p {
    margin: 0;
    padding: 15px;
  }
`;

export { ShowMoreContainer, ShowMoreText };