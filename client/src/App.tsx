import { motion } from "framer-motion";
import SideBar from "./SideBar";
import Content from "./Content";
import DetailBar from "./DetailBar";

function App() {
  return (
    <div className="Frame">
      <motion.div style={{ margin: 0 }}>
        <SideBar />
      </motion.div>
      <motion.div style={{ margin: 0 }}>
        <Content />
      </motion.div>
      <motion.div style={{ margin: 0 }}>
        <DetailBar />
      </motion.div>
    </div>
  );
}

export default App;
