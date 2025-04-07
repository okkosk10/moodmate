import EmotionInput from "@/features/emotion/EmotionInput";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">오늘의 감정</h1>
      <EmotionInput />
    </div>
  );
};

export default Home;