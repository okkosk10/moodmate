// src/pages/CalendarPage.jsx
import EmotionCalendar from "@/features/calendar/EmotionCalendar";

const CalendarPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">감정 캘린더</h1>
      <EmotionCalendar />
    </div>
  );
};

export default CalendarPage;