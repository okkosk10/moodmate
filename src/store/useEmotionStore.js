import { create } from "zustand";
import { persist } from "zustand/middleware";

// 감정 저장 구조 예시:
// {
//   "2025-04-07": {
//     emoji: "😄",
//     color: "#FDE68A",
//     note: "좋은 하루였어요!"
//   }
// }

export const useEmotionStore = create(
  persist(
    (set, get) => ({
      emotions: {},

      // 감정 저장하기
      addEmotion: (date, data) => {
        set((state) => ({
          emotions: {
            ...state.emotions,
            [date]: data,
          },
        }));
      },

      // 감정 불러오기
      getEmotion: (date) => {
        return get().emotions[date] || null;
      },

      // 특정 월 감정만 필터링해서 반환 (yyyy-MM)
      getMonthlySummary: (monthStr) => {
        const all = get().emotions;
        return Object.entries(all).filter(([date, _]) =>
          date.startsWith(monthStr)
        );
      },
    }),
    {
      name: "moodmate-emotions", // localStorage 키
    }
  )
);
