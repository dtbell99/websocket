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
      <h1>Detail</h1>
    </motion.div>
  );
}
