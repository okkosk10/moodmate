import { useEmotionStore } from "@/store/useEmotionStore";
import dayjs from "dayjs";

const EmotionHistory = () => {
  const { emotions } = useEmotionStore();

  const historyList = Object.entries(emotions)
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .map(([date, { emoji, note }]) => ({
      date,
      emoji,
      note,
    }));

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">감정 히스토리</h2>

      {historyList.length === 0 ? (
        <p className="text-center text-gray-500">아직 기록된 감정이 없습니다.</p>
      ) : (
        <ul className="space-y-3">
          {historyList.map(({ date, emoji, note }) => (
            <li
              key={date}
              className="flex gap-3 items-start bg-white shadow-md dark:bg-gray-800 p-4 rounded-2xl transition hover:scale-[1.01]"
            >
              <div className="text-3xl">{emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {dayjs(date).format("YYYY년 M월 D일")}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 break-words">
                  {note || "메모 없음"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmotionHistory;
