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
    <button
      className="absolute top-1/4 right-6 hidden md:block"
      onClick={toggleTheme}
    >
      <span suppressHydrationWarning>{icon}</span>
    </button>
  );
}
