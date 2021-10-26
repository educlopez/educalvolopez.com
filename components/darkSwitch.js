import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function DarkSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return (
    <div className="p-2 text-gray-500 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white">
      {renderThemeChanger()}
    </div>
  );
}
