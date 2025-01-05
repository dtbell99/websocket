import { useState } from "react";
import Home from "../components/wsapp/Home";
import Login from "../components/wsapp/Login";

export default function WSApp() {
  const [username, setUsername] = useState<string>("");

  return username ? (
    <Home username={username} />
  ) : (
    <Login setUsername={setUsername} />
  );
}
