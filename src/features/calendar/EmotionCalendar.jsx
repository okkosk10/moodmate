// src/features/calendar/EmotionCalendar.jsx
import { useEmotionStore } from "@/store/useEmotionStore";
import dayjs from "dayjs";

const EmotionCalendar = () => {
  const { emotions } = useEmotionStore();
  const today = dayjs();
  const startOfMonth = today.startOf("month");
  const endOfMonth = today.endOf("month");

  const daysInMonth = [];
  const startDay = startOfMonth.day();
  const totalDays = endOfMonth.date();

  for (let i = 0; i < startDay; i++) daysInMonth.push(null);
  for (let day = 1; day <= totalDays; day++) daysInMonth.push(day);

  const getColorForDate = (day) => {
    const dateStr = today.date(day).format("YYYY-MM-DD");
    return emotions[dateStr]?.color || "#E5E7EB";
  };

  return (
    <div className="section w-full max-w-[320px]">
      <h2 className="text-xl font-bold text-center mb-4">
        {today.format("YYYY년 M월")}
      </h2>

      <div className="grid grid-cols-7 gap-1 text-sm text-center mb-2">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="font-semibold text-gray-600">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {daysInMonth.map((day, idx) => {
          if (day === null) return <div key={idx} className="w-10 h-10" />;

          const dateStr = today.date(day).format("YYYY-MM-DD");
          const isToday = dateStr === today.format("YYYY-MM-DD");
          const bgColor = getColorForDate(day);

          return (
            <div
              key={idx}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                isToday ? "ring-2 ring-blue-400 font-bold" : ""
              }`}
              style={{ backgroundColor: bgColor }}
              title={emotions[dateStr]?.note || ""}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionCalendar;