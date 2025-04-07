import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CalendarPage from "@/pages/CalendarPage";
import StatsPage from "@/pages/StatsPage";
import HistoryPage from "@/pages/HistoryPage";
import Header from "@/layout/Header";
import BottomNav from "@/layout/BottomNav";
import { useThemeByEmotion } from "@/hooks/useThemeByEmotion";

function App() {
  const themeClass = useThemeByEmotion(); // ✅ 여기서 반환값 받아야 함

  return (
    <BrowserRouter>
      <div className={`${themeClass}`}>
        <Header />
          <main className="pt-16 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
