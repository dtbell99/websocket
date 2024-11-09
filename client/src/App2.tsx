import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  return (
    <>
      <motion.div
        className="box"
        animate={{ x: x, y: y }}
        transition={{ type: "spring" }}
        drag={true}
        dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
      >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </motion.div>

      <div className="card">
        <button onClick={() => setX((x) => x - 100)}>Left</button>
        <button
          onClick={() => {
            setX(0);
            setY(0);
          }}
        >
          Center
        </button>
        <button onClick={() => setX((x) => x + 100)}>Right</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
