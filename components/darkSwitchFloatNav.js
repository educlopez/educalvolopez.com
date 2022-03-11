import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function DarkSwitchFloatNav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <img src="assets/general/night.png" />
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <img src="assets/general/day.png" />
        </div>
      );
    }
  };
  return <div className="floatnav-item">{renderThemeChanger()}</div>;
}
