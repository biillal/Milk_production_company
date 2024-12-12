import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createCow, updateCow } from '../redux/features/cows/cowSlice';

const CreateCow = ({ currentcow, closeModal }) => {
    const [Date_of_entry, setDate_of_entry] = useState('')
    const [lineage, setlineage] = useState('الهولشتاين')
    const dispatch = useDispatch()
    
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentcow) {
            const formData = {Date_of_entry, lineage }
            const id = currentcow.Cow_number
            dispatch(updateCow({formData,id}));
        } else {
            dispatch(createCow({ Date_of_entry, lineage }))
        }
        closeModal();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">
                    {currentcow ? 'Update Cow' : 'Create Cow'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block">تاريخ الدخول</label>
                        <input
                            type="date"
                            name="entryDate"
                            onChange={(e) => setDate_of_entry(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block">السلالة</label>
                        <select
                            name="lineage"
                            onChange={(e) => setlineage(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        >
                            <option value="الهولشتاين">الهولشتاين</option>
                            <option value="المونتبليارد">المونتبليارد</option>
                        </select>
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
                            {currentcow ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCow
