import { motion } from "framer-motion";

export default function SideBar({
  sideBarMaxWidth,
}: {
  sideBarMaxWidth: number;
}) {
  const content = () => {
    const records: string[] = [];
    for (let i = 0; i < 100; i++) {
      records.push(new Date().toString());
    }
    return records.map((rec, indx) => <li key={indx}>{rec}</li>);
  };

  return (
    <motion.div className="SideBar" animate={{ width: sideBarMaxWidth }}>
      <h1>Sidebar</h1>
      <hr />
      <ul>{content()}</ul>
    </motion.div>
  );
}
