import React, { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCows } from '../redux/features/cows/cowSlice';
import { MdDelete } from "react-icons/md";
import { LiaPaintBrushSolid } from "react-icons/lia";
import CreateCow from '../components/CreateCow';


const CowRegistration = () => {
  const [opneCreate, setOpenCreate] = useState(false)
  const { cows } = useSelector((state) => state.cows)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCows())
  }, [])

  const { t } = useTranslation();

  return (
    <MainLayout>


      <div className='dark:bg-gray-800 h-screen  relative '>
        <div class="relative p-5 w-[100%]  ">
          <div className='flex justify-between '>
            <span></span>
            <h1 className='text-center  text-2xl font-bold dark:text-white'>{t('cow_list')} </h1>
            <button onClick={() => setOpenCreate(true)} className='text-end dark:bg-white dark:text-gray-800 border p-2 rounded-lg'>{t('create_cow')}</button>
          </div>
          <div className="p-6  mt-10 px-0 lg:h-96 h-[600px] mx-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll overflow-x-scroll lg:overflow-x-hidden  ">
            <table class="w-full min-w-max  table-auto text-left text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-black dark:text-white">
                    {t('cow_Number')}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black dark:text-white">
                    {t('Date_of_entry')}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black dark:text-white">
                    {t('lineage')}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black dark:text-white">
                    {t('action_update')}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black dark:text-white">
                    {t('action_delete')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  cows.map((cow) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                          {cow.Cow_number}
                        </th>
                        <td class="px-6 py-4 text-black dark:text-white">
                          {cow.Date_of_entry}
                        </td>
                        <td class="px-6 py-4 text-black dark:text-white">
                          {cow.lineage}
                        </td>
                        <td class="px-6 py-4 text-black dark:text-white">
                          < LiaPaintBrushSolid className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                        </td>
                        <td class="px-6 py-4 text-black dark:text-white">
                          <MdDelete className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                        </td>

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {
          opneCreate ?
            (
              <CreateCow setOpenCreate={setOpenCreate} />
            )
            :
            (
              <div className=""></div>
            )
        }
      </div>


    </MainLayout>
  );
};

export default CowRegistration;
