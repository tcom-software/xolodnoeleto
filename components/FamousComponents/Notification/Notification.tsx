import React, { useEffect } from "react";
import { NotificationContainer } from "./styles";
import { useSpring, animated } from "react-spring";

const Notification = ({ notification, setNotificationMessage }) => {
  const { message, type } = notification;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (message != null) {
        setNotificationMessage("", type);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const props = useSpring({
    to: {
      transform: `translateX(${message ? "0%" : "110%"})`,
      opacity: message ? 1 : 0,
    },
    from: { transform: `translateX(110%)`, opacity: 0 },
  });

  return (
    <NotificationContainer type={type}>
      <animated.div style={props}>{message}</animated.div>
    </NotificationContainer>
  );
};

export default Notification;
