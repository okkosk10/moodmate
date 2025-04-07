// src/layout/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-4 py-3 shadow-md fixed top-0 z-50 bg-inherit text-inherit">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight whitespace-nowrap">MoodMate</h1>

        <nav className="hidden md:flex gap-6 text-sm text-inherit whitespace-nowrap">
          <Link to="/" className="hover:underline">홈</Link>
          <Link to="/calendar" className="hover:underline">캘린더</Link>
          <Link to="/stats" className="hover:underline">통계</Link>
          <Link to="/history" className="hover:underline">기록</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;