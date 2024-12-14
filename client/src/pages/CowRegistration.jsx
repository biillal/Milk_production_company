import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCow, fetchCows } from '../redux/features/cows/cowSlice';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../components/MainLayout';
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { LiaPaintBrushSolid } from "react-icons/lia";
import CreateCow from '../components/CreateCow';
import { Link } from 'react-router-dom';
const initialProducts = [
  { id: 1, name: 'Milk', price: '$5.00', category: 'Dairy' },
  { id: 2, name: 'Cheese', price: '$8.00', category: 'Dairy' },
  { id: 3, name: 'Butter', price: '$4.50', category: 'Dairy' },
];

const CowRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentcow, setCurrentcow] = useState(null);
  const [form, setForm] = useState({ id: null, name: '', price: '', category: '' });
  const [id, setId] = useState("")
  const { cows } = useSelector((state) => state.cows)

  const dispatch = useDispatch()
  const { message,error } = useSelector((state) => state.cows)
  console.log(error);

  useEffect(() => {
    if (message) {
      alert(message)
      window.location.reload()
    }
    if (error) {
      alert(error)
    }
  }, [message,error])

  useEffect(() => {
    dispatch(fetchCows())
  }, [dispatch])

  const { t } = useTranslation();


  const openModal = (cow = null) => {
    if (cow) {
      setCurrentcow(cow);
    } else {
      setCurrentcow(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteCow(id))
  };

  return (
    <MainLayout>
      <div className="p-6 dark:h-auto dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('cow_list')}</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          {t('create_cow')}
        </button>

        {
          cows.length > 0 ?
            (
              <div className="overflow-x-auto ">
                <table className="min-w-full dark:bg-gray-500 bg-white border rounded-lg">
                  <thead className="bg-gray-100 dark:bg-gray-900">
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
                        {t('Medical_check-up')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('action')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cows.map((cow) => (
                      <tr key={cow.id} className="border-t">
                        <td className="p-3 text-center">{cow.Cow_number}</td>
                        <td className="p-3 text-center">{cow.Date_of_entry}</td>
                        <td className="p-3 text-center">{cow.lineage}</td>
                        <td className="p-3 space-x-2 ">
                          <Link to={`/medical-exam/${cow.Cow_number}/cows`} className='flex justify-center' ><GoMoveToEnd className='text-3xl' /></Link>
                        </td>
                        <td className="p-3 space-x-2 flex justify-center">
                          < LiaPaintBrushSolid onClick={() => openModal(cow)} className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                          <button
                            onClick={() => handleDelete(cow.id)}
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
          <CreateCow currentcow={currentcow} closeModal={closeModal} />
        )}
      </div>
    </MainLayout>
  );
};

export default CowRegistration;
