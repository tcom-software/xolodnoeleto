import React, { useEffect } from "react";
import { NotificationContainer } from "./styles";
import { useSpring, animated } from "react-spring";

const Notification = ({ notificationMessage, setNotificationMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (notificationMessage != null) {
        setNotificationMessage(null);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [notificationMessage]);

  const props = useSpring({
    to: { transform: `translateX(0px)` },
    from: { transform: `translateX(300px)` },
  });

  if (notificationMessage) {
    return (
      <NotificationContainer>
        <animated.div style={props}>i will fade</animated.div>
      </NotificationContainer>
    );
  } else {
    return null;
  }
};

export default Notification;
