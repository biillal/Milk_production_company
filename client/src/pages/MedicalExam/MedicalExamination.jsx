import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { deleteMedicalExam, fetchMedicalExams } from '../../redux/features/medicalExams/examsSlice'
import { Link } from 'react-router-dom'
import CreateCow from '../../components/CreateCow';
import FormMedicalExams from '../../components/FormMedicalExams';

const MedicalExamination = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const { medicalExams, message, error } = useSelector((state) => state.medicalExams)


  useEffect(() => {
    dispatch(fetchMedicalExams())
  }, [dispatch])


  useEffect(() => {
    if (message) {
      alert(message)
      window.location.reload()
    }
    if (error) {
      alert(error)
    }
  }, [message, error])

  const { t } = useTranslation();
  const handleDelete = (id) => {
    dispatch(deleteMedicalExam(id))
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <MainLayout>
      <div className="p-6 h-screen dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('medicalExam_list')}</h1>

        {
          medicalExams.length > 0 ?
            (
              <div className="overflow-x-auto ">
                <table className="min-w-full dark:bg-gray-500 bg-white border rounded-lg">
                  <thead className="bg-gray-100 dark:bg-gray-900">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('cow_Number')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('date_exams')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('disease')}
                      </th>
                      <th scope="col" class="px-6 py-3 text-black dark:text-white">
                        {t('action')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicalExams.map((exam) => (
                      <tr key={exam.id} className="border-t">
                        <td className="p-3 text-center">{exam.Cow_number}</td>
                        <td className="p-3 text-center">{exam.date}</td>
                        <td className="p-3 text-center">{exam.disease}</td>
                        <td className="p-3 space-x-2 flex justify-center">
                          < LiaPaintBrushSolid onClick={() => openModal(exam)} className='hover:border hover:rounded-md cursor-pointer text-2xl' />
                          <button
                            onClick={() => handleDelete(exam.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            <MdDelete className='hover:border hover:rounded-md cursor-pointer text-2xl' />

                          </button>
                        </td>
                        {isModalOpen && (
                          <FormMedicalExams closeModal={closeModal} exam={exam} />
                        )}
                      </tr>

                    ))}
                  </tbody>
                </table>

              </div>
            ) :
            (
              <div className="h-[63vh] text-center font-bold dark:text-white text-3xl " >
                {t('resultmedicalExams')}
              </div>
            )
        }


      </div>
    </MainLayout>
  )
}

export default MedicalExamination
