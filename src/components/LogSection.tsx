import type { Log } from "../types";
import LogItem from "./LogItem";

interface Props {
  logs: Log[];
}

const LogSection = ({ logs }: Props) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-sm h-full overflow-y-auto">
      {logs.length === 0 ? (
        <p className="text-sm text-gray-400 text-center mt-4">
          아직 응원이 없어요. 첫 번째 응원을 남겨보세요! 🎉
        </p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </div>
  );
};

export default LogSection;
