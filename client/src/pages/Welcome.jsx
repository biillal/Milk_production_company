import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import { MainLayout } from '../components/MainLayout';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="p-6 h-screen bg-white flex flex-col items-center gap-4  justify-center  dark:bg-gray-800 text-black dark:text-white">
        <div className='-mt-20 text-3xl font-bold '>
          {t('welcome')}
        </div>
        <div className='text-xl font-semibold '>
          {t('title')}
        </div>

      </div>
    </MainLayout>
  );
};

export default Welcome;
