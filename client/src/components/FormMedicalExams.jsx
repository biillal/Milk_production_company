import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateMedicalExam } from '../redux/features/medicalExams/examsSlice'

const FormMedicalExams = ({ closeModal ,exam }) => {
    const [date, setdate] = useState(exam.date)
    const [disease, setdisease] = useState(exam.disease)
    const [Cow_number, setCow_number] = useState(exam.Cow_number)
    const dispatch = useDispatch()
    const { message, error } = useSelector((state) => state.medicalExams)
    const { t } = useTranslation()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { disease, date ,Cow_number}
        const id = exam.id
        dispatch(UpdateMedicalExam({ formData,id  }))
    }

    useEffect(() => {
        if (message) {
            alert(message)
            window.location.reload()
        }
        if (error) {
            alert(error)
        }
    }, [message, error])
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">
                    {t('update_medicalExam')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block"> {t('cow_Number')} </label>
                        <input
                            type="text"
                            name="Cow_number"
                            defaultValue={exam.Cow_number}
                            onChange={(e) => setCow_number(e.target.value)} 
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 ">{t('Examination_date')} </label>
                        <input type="date" className="border p-2 w-full" defaultValue={exam.date} onChange={(e) => setdate(e.target.value)} />
                    </div>
                    <div>
                        <label className="block mb-1 ">{t('disease')}:</label>
                        <input type="text" className="border p-2 w-full" defaultValue={exam.disease} onChange={(e) => setdisease(e.target.value)} />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            {t('update_cow')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormMedicalExams
