import React, { useState, useEffect, useRef } from "react";
import theme from "styles/theme";
import { SvgIcon, Button } from "@atoms";
import { useSpring } from "react-spring";
import { ShowMoreContainer, ShowMoreText } from "./styles";

const ShowMoreWrapper = ({
  text,
  fromHeight,
  border,
  color,
  buttonText,
  svgShow,
  buttonStyle,
}) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState();
  const pHeight: any = useRef(0);

  useEffect(() => {
    const { offsetHeight }: any = pHeight.current;
    setHeight(offsetHeight + 10);
  }, [pHeight]);

  const styles = useSpring({
    config: { friction: 10 },
    height: !open ? `${fromHeight}px` : `${height}px`,
  });

  return (
    <ShowMoreContainer>
      <ShowMoreText style={styles} color={color}>
        <p ref={pHeight}>{text}</p>
      </ShowMoreText>
      <div onClick={() => setOpen(!open)}>
        {buttonStyle ? (
          <Button type={"with-icon"} width={"139px"} height={"40px"}>
            {open ? buttonText[1] : buttonText[0]}
          </Button>
        ) : (
          <>
            {open ? buttonText[1] : buttonText[0]}
            {svgShow ? (
              <SvgIcon
                width={13}
                height={13}
                color={theme.body.colorSecondary}
                type={open ? "arrowUp" : "arrowDown"}
              />
            ) : null}
          </>
        )}
      </div>
    </ShowMoreContainer>
  );
};

export default ShowMoreWrapper;
