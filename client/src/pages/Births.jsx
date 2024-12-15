import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCow } from '../redux/features/cows/cowSlice';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../components/MainLayout';
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { LiaPaintBrushSolid } from "react-icons/lia";
import CreateCow from '../components/CreateCow';
import { Link } from 'react-router-dom';
import { fetchbirth } from '../redux/features/birth/birthSlice';
import { FormBirth } from '../components/FormBirth';


const Births = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentcow, setCurrentcow] = useState(null);
  const { births } = useSelector((state) => state.births)

  const dispatch = useDispatch()
  const { message, error } = useSelector((state) => state.births)
  console.log(error);

  useEffect(() => {
    if (message) {
      alert(message)
      window.location.reload()
    }
    if (error) {
      alert(error)
    }
  }, [message, error])

  useEffect(() => {
    dispatch(fetchbirth())
  }, [dispatch])

  const { t } = useTranslation();


  const openModal = (birth = null) => {
    if (birth) {
      setCurrentcow(birth);
    } else {
      setCurrentcow(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deletebirth(id))
  };
  return (
    <MainLayout>
      <div className="p-6 dark:h-auto dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('birth_list')}</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          {t('add_birth')}
        </button>

        {
          births.length > 0 ?
            (
              <div className="overflow-x-auto ">
                <table className="min-w-full dark:bg-gray-500 bg-white border rounded-lg">
                  <thead className="bg-gray-100 dark:bg-gray-900">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('mother_cow_number')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('Date_of_birth')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('action')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {births.map((birth) => (
                      <tr key={birth.id} className="border-t">
                        <td className="p-3 text-center">{birth.Cow_number}</td>
                        <td className="p-3 text-center">{birth.date}</td>
                        
                        <td className="p-3 space-x-2 flex justify-center">
                          < LiaPaintBrushSolid onClick={() => openModal(birth)} className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                          <button
                            onClick={() => handleDelete(birth.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            <MdDelete className='hover:border hover:rounded-md cursor-pointer text-2xl' />

                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) :
            (
              <div className="h-[63vh] text-center font-bold dark:text-white text-3xl " >
                {t('resultcows')}
              </div>
            )
        }

        {isModalOpen && (
          <FormBirth currentcow={currentcow} closeModal={closeModal} />
        )}
      </div>
    </MainLayout>
  )
}

export default Births
