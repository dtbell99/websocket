import useWebSocket from "react-use-websocket";
import throttle from "lodash.throttle";
import { useEffect, useRef } from "react";

import { Cursor } from "../Cursor";

type User = {
  username: string;
  state: UserState;
};

type UserState = {
  x: number;
  y: number;
};

type HomeProps = {
  username: string;
};

const renderedCursors = (users: Record<string, User>) => {
  return Object.keys(users).map((uuid: string) => {
    const user = users[uuid];
    return <Cursor key={uuid} point={[user.state.x, user.state.y]} />;
  });
};

const renderedUsers = (users: Record<string, User>) => {
  return Object.keys(users).map((uuid, indx) => {
    return <li key={indx}>{JSON.stringify(users[uuid])}</li>;
  });
};

export default function Home({ username }: HomeProps) {
  const WS_URL = "ws://localhost:3002";

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username },
  });

  const THROTTLE = 100;
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE));

  useEffect(() => {
    sendJsonMessage({ x: 0, y: 0 });

    window.addEventListener("mousemove", (e) => {
      sendJsonMessageThrottled.current({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  if (lastJsonMessage) {
    const record = lastJsonMessage as Record<string, User>;
    return (
      <>
        {renderedCursors(record)}
        {renderedUsers(record)}
      </>
    );
  }
}
