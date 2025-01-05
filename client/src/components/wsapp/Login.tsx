import { useState } from "react";
import { Button } from "react-bootstrap";

type LoginProps = {
  setUsername: (name: string) => void;
};

export default function Login({ setUsername }: LoginProps) {
  const [name, setName] = useState<string>("");

  const login = () => {
    setUsername(name);
    setName("");
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="What is your name?"
      />
      <Button onClick={login}>Login</Button>
    </div>
  );
}
