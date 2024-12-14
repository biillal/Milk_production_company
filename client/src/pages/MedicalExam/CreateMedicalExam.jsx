import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createMedicalExam } from '../../redux/features/medicalExams/examsSlice';

export const CreateMedicalExam = () => {
    const [date, setdate] = useState('')
    const [disease, setdisease] = useState('')
    const dispatch = useDispatch()
    const {message,error} = useSelector((state)=>state.medicalExams)
    const { Cow_number } = useParams();
    const { t } = useTranslation()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {disease,date}
        dispatch(createMedicalExam({formData,Cow_number}))
    }

   useEffect(()=>{
    if(message){
        alert(message)
        navigate('/medical-exam')
    }
   },[message,error])
    return (
        <MainLayout>
            <div className="flex justify-center dark:bg-gray-800 h-screen m-0 p-0 ">
                <div className="p-4 lg:w-[50%] mt-48 lg:mt-36  ">
                    <h2 className="text-2xl font-bold mb-4 dark:text-white text-center">{t('title_exam')} : {Cow_number}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 dark:text-white"> {t('Examination_date')}:</label>
                            <input type="date" className="border p-2 w-full" onChange={(e)=>setdate(e.target.value)} />
                        </div>
                        <div>
                            <label className="block mb-1 dark:text-white">{t('disease')}:</label>
                            <input type="text" className="border p-2 w-full" onChange={(e)=>setdisease(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            إضافة الفحص
                        </button>
                    </form>
                </div>
            </div>

        </MainLayout>
    )
}
