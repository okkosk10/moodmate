import { useEmotionStore } from "@/store/useEmotionStore";
import dayjs from "dayjs";

export const useThemeByEmotion = () => {
  const { emotions } = useEmotionStore();
  const today = dayjs().format("YYYY-MM-DD");
  const todayEmotion = emotions[today]?.emoji;

  switch (todayEmotion) {
    case "😄":
      return "theme-happy";
    case "😐":
      return "theme-neutral";
    case "😢":
      return "theme-sad";
    case "😠":
      return "theme-angry";
    case "😴":
      return "theme-tired";
    default:
      return "theme-default";
  }
};
