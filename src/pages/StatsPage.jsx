import EmotionStats from "@/features/stats/EmotionStats";

const StatsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">감정 통계</h1>
      <EmotionStats />
    </div>
  );
};

export default StatsPage;
