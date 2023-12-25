"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function ButtonTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = theme === "light" ? <IoMoon size={25} /> : <IoSunny size={25} />;

  return (
    <button onClick={toggleTheme}>
      <span className="flex items-center gap-1" suppressHydrationWarning>
        {icon}
      </span>
    </button>
  );
}
