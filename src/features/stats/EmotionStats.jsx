import { useEmotionStore } from "@/store/useEmotionStore";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js";
import dayjs from "dayjs";
import { useState, useMemo } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const emotionTypeMap = {
  "😄": "positive",
  "😐": "neutral",
  "😢": "negative",
  "😠": "negative",
  "😴": "negative",
};

const EmotionStats = () => {
  const { emotions } = useEmotionStore();
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("YYYY-MM"));

  const monthList = useMemo(() => {
    const allDates = Object.keys(emotions);
    const months = new Set(allDates.map((d) => dayjs(d).format("YYYY-MM")));
    return Array.from(months).sort().reverse();
  }, [emotions]);

  // 월 이동 함수
  const handleMonthChange = (direction) => {
    const current = dayjs(selectedMonth + "-01");
    const newMonth = direction === "prev"
      ? current.subtract(1, "month")
      : current.add(1, "month");
    setSelectedMonth(newMonth.format("YYYY-MM"));
  };

  // 해당 월의 감정 데이터
  const monthly = Object.entries(emotions).filter(([date]) =>
    date.startsWith(selectedMonth)
  );

  const countMap = {};
  const typeCount = { positive: 0, negative: 0, neutral: 0 };

  monthly.forEach(([_, data]) => {
    const emoji = data.emoji;
    const type = emotionTypeMap[emoji] || "neutral";
    countMap[emoji] = (countMap[emoji] || 0) + 1;
    typeCount[type]++;
  });

  const barLabels = Object.keys(countMap);
  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: "감정 빈도",
        data: barLabels.map((e) => countMap[e]),
        backgroundColor: "#60A5FA",
      },
    ],
  };

  const pieData = {
    labels: ["긍정", "중립", "부정"],
    datasets: [
      {
        data: [typeCount.positive, typeCount.neutral, typeCount.negative],
        backgroundColor: ["#FACC15", "#A3A3A3", "#60A5FA"],
      },
    ],
  };

  return (
    <div className="max-w-md mx-auto px-4 space-y-6">
      {/* <h2 className="text-xl font-bold text-center">감정 통계</h2> */}

      {/* 월 선택 컨트롤 */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => handleMonthChange("prev")} className="text-2xl px-2">←</button>
        <span className="font-medium">{dayjs(selectedMonth + "-01").format("YYYY년 M월")}</span>
        <button onClick={() => handleMonthChange("next")} className="text-2xl px-2">→</button>
      </div>

      {/* 감정별 바차트 */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-center">감정별 빈도</h3>
        {barLabels.length > 0 ? <Bar data={barData} /> : (
          <p className="text-center text-gray-500">해당 월에 기록된 감정이 없습니다.</p>
        )}
      </div>

      {/* 긍/부정 파이차트 */}
      <div>
        <h3 className="text-sm font-semibold mb-2 text-center">긍정 vs 부정</h3>
        {(typeCount.positive + typeCount.negative + typeCount.neutral) > 0 ? (
          <Pie data={pieData} />
        ) : (
          <p className="text-center text-gray-500">감정 기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default EmotionStats;
