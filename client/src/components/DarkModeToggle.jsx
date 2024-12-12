import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";

const DarkModeToggle = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
     <button
     onClick={toggleDarkMode}
     className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
   >
     {isDarkMode ? <div className='flex items-start justify-center gap-1'><TiWeatherSunny className="h-5 w-5 flex text-yellow-500" /> </div> :<div  className='flex items-start justify-center gap-1'><FaMoon  className="h-5 flex w-5 text-yellow-500" />  </div> }
   </button>
  );
};

export default DarkModeToggle;
