import { motion } from "framer-motion";

export default function SideBar({
  sideBarWidth,
  marginLeft,
}: {
  sideBarWidth: number;
  marginLeft: string;
}) {
  const content = () => {
    const records: string[] = [];
    for (let i = 0; i < 100; i++) {
      records.push(new Date().toString());
    }
    return records.map((rec, indx) => <li key={indx}>{rec}</li>);
  };

  return (
    <motion.div
      className="SideBar"
      animate={{ width: sideBarWidth, marginLeft: marginLeft }}
    >
      <h1>Sidebar</h1>
      <hr />
      <ul>{content()}</ul>
    </motion.div>
  );
}
