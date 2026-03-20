import { useState } from "react";
import ProfileSection from "./components/ProfileSection";
import CheerSection from "./components/CheerSection";
import LogSection from "./components/LogSection";
import type { Log } from "./types";

const App = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [colorCounter, setColorCounter] = useState(0);

  const handleCheer = (newLog: Omit<Log, "colorIndex">) => {
    setLogs((prev) => [{ ...newLog, colorIndex: colorCounter }, ...prev]);
    setColorCounter((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl h-[80vh] flex flex-col md:flex-row gap-4 md:gap-6">
        {/* 왼쪽 컨테이너 - 우측과 동일한 h-full */}
        <div className="flex flex-col gap-4 w-full md:w-72 shrink-0 h-full bg-white rounded-2xl shadow-sm p-4">
          {/* ProfileSection: 남은 공간 모두 차지 */}
          <div className="flex-1 overflow-y-auto">
            <ProfileSection />
          </div>
          {/* CheerSection: 하단 고정 */}
          <div className="shrink-0">
            <CheerSection onCheer={handleCheer} cheerCount={logs.length} />
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="flex-1 h-full">
          <LogSection logs={logs} />
        </div>
      </div>
    </div>
  );
};

export default App;
