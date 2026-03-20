import type { Log } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface Props {
  log: Log;
}

const RAINBOW_COLORS = [
  "border-red-400",
  "border-orange-400",
  "border-yellow-400",
  "border-green-400",
  "border-blue-400",
  "border-indigo-400",
  "border-purple-400",
];

const LogItem = ({ log }: Props) => {
  const colorClass = RAINBOW_COLORS[log.colorIndex % RAINBOW_COLORS.length];

  return (
    <div
      className={`flex flex-col gap-1 p-3 bg-gray-50 rounded-xl border-l-4 ${colorClass}`}
    >
      <p className="text-sm text-gray-800">{log.message}</p>
      <p className="text-xs text-gray-400">{dayjs(log.createdAt).fromNow()}</p>
    </div>
  );
};

export default LogItem;
