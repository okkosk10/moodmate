import { NavLink } from "react-router-dom";
import { Home, Calendar, BarChart, BookOpen } from "lucide-react"; // 아이콘 라이브러리 사용 시

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t dark:border-gray-700 z-40 md:hidden">
      <div className="flex justify-around py-2">
        <NavLink to="/" className="flex flex-col items-center text-xs">
          <Home size={20} />
          홈
        </NavLink>
        <NavLink to="/calendar" className="flex flex-col items-center text-xs">
          <Calendar size={20} />
          캘린더
        </NavLink>
        <NavLink to="/stats" className="flex flex-col items-center text-xs">
          <BarChart size={20} />
          통계
        </NavLink>
        <NavLink to="/history" className="flex flex-col items-center text-xs">
          <BookOpen size={20} />
          기록
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
