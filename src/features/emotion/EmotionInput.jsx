// src/features/emotion/EmotionInput.jsx
import { useState } from "react";
import { useEmotionStore } from "@/store/useEmotionStore";
import dayjs from "dayjs";

const emojiList = [
  { emoji: "😄", color: "#FDE68A" },
  { emoji: "😐", color: "#A1A1AA" },
  { emoji: "😢", color: "#93C5FD" },
  { emoji: "😠", color: "#FCA5A5" },
  { emoji: "😴", color: "#D1D5DB" },
];

const EmotionInput = () => {
  const today = dayjs().format("YYYY-MM-DD");
  const { emotions, addEmotion } = useEmotionStore();
  const existing = emotions[today];

  const [selectedEmoji, setSelectedEmoji] = useState(existing?.emoji || "");
  const [note, setNote] = useState(existing?.note || "");

  const handleSave = () => {
    if (!selectedEmoji) return alert("감정을 선택해주세요!");
    const selected = emojiList.find((e) => e.emoji === selectedEmoji);
    addEmotion(today, {
      emoji: selected.emoji,
      color: selected.color,
      note,
    });
    alert("오늘의 감정이 저장되었어요!");
  };

  return (
    <div className="section space-y-4 text-center">
      <h2 className="text-xl font-bold">{today}</h2>

      <div className="flex justify-center gap-4">
        {emojiList.map((item) => (
          <button
            key={item.emoji}
            onClick={() => setSelectedEmoji(item.emoji)}
            className={`text-3xl transition-transform hover:scale-110 ${
              selectedEmoji === item.emoji ? "ring-4 ring-blue-300 rounded-full" : ""
            }`}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      <textarea
        placeholder="오늘 하루 어땠나요?"
        className="w-full p-2 border rounded resize-none min-h-[80px]"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleSave} className="btn">
        저장하기
      </button>
    </div>
  );
};

export default EmotionInput;