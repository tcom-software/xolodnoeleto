import React, { useState, useEffect, useRef } from "react";
import theme from "styles/theme";
import { SvgIcon, Button } from "@famous";
import { useSpring } from "react-spring";
import { ShowMoreContainer, ShowMoreText } from "./styles";
import { ShowMoreWrapperInterface } from "interfaces";

const ShowMoreWrapper = ({
  line,
  text,
  border,
  color,
  svgShow,
  padding,
  children,
  buttonText,
  fromHeight,
  buttonStyle,
  buttonTextAlign,
}: ShowMoreWrapperInterface) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState();
  const pHeight: any = useRef(0);

  useEffect(() => {
    const { offsetHeight }: any = pHeight.current;
    setHeight(offsetHeight + 50);
  }, [pHeight]);

  const styles = useSpring({
    config: { friction: 10 },
    height: !open ? `${fromHeight}px` : `${height}px`,
  });

  return (
    <ShowMoreContainer buttontextalign={buttonTextAlign}>
      <ShowMoreText style={styles} color={color} padding={padding}>
        <p ref={pHeight}>{text}</p>
      </ShowMoreText>
      <div onClick={() => setOpen(!open)} className="show-more-button-align">
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
