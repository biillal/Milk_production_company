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
import { deleteMilkProduction, fetchMilkProduction } from '../redux/features/milkProduction/milkProdutionSlice';
import FormMilkProduction from '../components/FormMilkProduction';


const MilkProduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentmilk, setCurrentmilk] = useState(null);
  const { milkProductions,message } = useSelector((state) => state.milkProductions)

  const dispatch = useDispatch()

  useEffect(() => {
    if (message) {
      window.location.reload()
    }
  }, [message])

  useEffect(() => {
    dispatch(fetchMilkProduction())
  }, [dispatch])

  const { t } = useTranslation();


  const openModal = (milk = null) => {
    if (milk) {
      setCurrentmilk(milk);
    } else {
      setCurrentmilk(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteMilkProduction(id))
  };

  return (
    <MainLayout>
      <div className="p-6 dark:h-auto dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('titleMilk')}</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          {t('create_milk')}
        </button>

        {
          milkProductions.length > 0 ?
            (
              <div className="overflow-x-auto ">
                <table className="min-w-full dark:bg-gray-500 bg-white border rounded-lg">
                  <thead className="bg-gray-100 dark:bg-gray-900">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('today')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('Amount_of_milk')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('action')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {milkProductions.map((milk) => (
                      <tr key={milk.id} className="border-t">
                        <td className="p-3 text-center">{milk.date}</td>
                        <td className="p-3 text-center">{milk.milkAmount}</td>
                        <td className="p-3 space-x-2 flex justify-center">
                          < LiaPaintBrushSolid onClick={() => openModal(milk)} className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                          <button
                            onClick={() => handleDelete(milk.id)}
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
                 {t('resultMilkProduction')}
              </div>
            )
        }

        {isModalOpen && (
          <FormMilkProduction currentmilk={currentmilk} closeModal={closeModal} />
        )}
      </div>
    </MainLayout>
  );
};

export default MilkProduction;
