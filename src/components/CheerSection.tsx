import { useState } from "react";
import type { Log } from "../types";

interface Props {
  onCheer: (log: Omit<Log, "colorIndex">) => void;
  cheerCount: number;
}

const RANDOM_MESSAGES = [
  "화이팅! 멋진 개발자가 될 거예요!",
  "응원합니다! 좋은 결과 있을 거예요!",
  "열심히 하는 모습이 멋져요!",
  "항상 응원하고 있어요!",
  "최고예요! 잘 하고 있어요!",
  "포기하지 마세요! 분명 잘 될 거예요!",
];

const CheerSection = ({ onCheer, cheerCount }: Props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const finalMessage = message.trim()
      ? message.trim()
      : RANDOM_MESSAGES[Math.floor(Math.random() * RANDOM_MESSAGES.length)];

    onCheer({
      id: Date.now(),
      message: finalMessage,
      createdAt: new Date(),
    });
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="메시지를 입력하세요..."
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-400 hover:bg-purple-500 text-white rounded-lg py-2 text-sm font-medium transition-colors"
      >
        응원하기 🎉
      </button>
      <p className="text-xs text-gray-400 text-center">
        총 응원 수 : {cheerCount}
      </p>
    </div>
  );
};

export default CheerSection;
