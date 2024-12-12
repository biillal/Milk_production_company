// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useTranslation } from 'react-i18next';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-900 relative h-[80px] flex items-center justify-center w-[100%] text-black dark:text-white">
      <div className="flex justify-between items-center w-[100%] ">
        <Link to="/" className="text-xl font-bold">
          {t('logo')}
        </Link>
        <div className="flex items-center gap-4">

          <div className="lg:flex space-x-4 hidden ">
            <Link to="/" className="hover:underline">{t('home')}</Link>
            <Link to="/cow-registration" className="hover:underline">{t('create_cow')}</Link>
            <Link to="/medical-exam" className="hover:underline">{t('Medical_examination')} </Link>
            <Link to="/birth-records" className="hover:underline">{t('Births')}</Link>
            <Link to="/milk-production" className="hover:underline">{t('Milk_production')} </Link>
          </div>
          <DarkModeToggle />
          <div className="relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
            >
              {i18n.language === 'ar' ? 'ar' : 'en'}
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                <li>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    العربية
                  </button>
                </li>
              </ul>
            )}
          </div>
          {
            open ?
              (
                <IoCloseSharp onClick={()=>setOpen(false)} className='lg:hidden' />
              ) :
              (
                < FiMenu onClick={()=>setOpen(true)} className='lg:hidden' />
              )
          }

        </div>
        <div
          className={`absolute lg:hidden flex shadow-xl z-30 flex-col justify-center top-20 right-0 w-full h-screen dark:bg-gray-800 bg-gray-100 items-center gap-16 font-semibold text-lg transform transition-transform ${open ? "opacity-100":"opacity-0"}`}
          style={{transition:"transform 0.1s ease,opanci"}}  
        >
          <Link to="/" className="hover:underline">{t('home')}</Link>
          <Link to="/cow-registration" className="hover:underline">{t('create_cow')}</Link>
          <Link to="/medical-exam" className="hover:underline">{t('Medical_examination')} </Link>
          <Link to="/birth-records" className="hover:underline">{t('Births')}</Link>
          <Link to="/milk-production" className="hover:underline">{t('Milk_production')} </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
