import React, { useEffect } from "react";
import { NotificationContainer } from "./styles";
import { useSpring, animated } from "react-spring";

const Notification = ({ notificationMessage: msg, setNotificationMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (msg != null) {
        setNotificationMessage(null);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [msg]);

  const props = useSpring({
    to: {
      transform: `translateX(${msg ? "-200px" : 0})`,
      opacity: msg ? 1 : 0,
    },
    from: { transform: `translateX(0px)`, opacity: 0 },
  });

  return (
    <NotificationContainer>
      <animated.div style={props}>{msg}</animated.div>
    </NotificationContainer>
  );
};

export default Notification;
