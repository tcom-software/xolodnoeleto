import React, { useState, useEffect, useRef } from "react";
import theme from "styles/theme";
import { SvgIcon } from "@atoms";
import { useSpring } from "react-spring";
import { ShowMoreContainer, ShowMoreText } from "./styles";

const ShowMoreWrapper = ({ text, fromHeight, border, color }) => {
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
        Показать больше
        <SvgIcon
          width={13}
          height={13}
          color={theme.body.colorSecondary}
          type={open ? "arrowUp" : "arrowDown"}
        />
      </div>
    </ShowMoreContainer>
  );
};

export default ShowMoreWrapper;
