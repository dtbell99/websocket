import { motion } from "framer-motion";

export default function DetailBar({
  width,
  marginRight,
}: {
  width: number;
  marginRight: string;
}) {
  return (
    <motion.div
      className="DetailBar"
      animate={{ width: width, marginRight: marginRight }}
    >
      <div className="DetailMenu">menu</div>
      <div className="DetailContent">content</div>
    </motion.div>
  );
}
