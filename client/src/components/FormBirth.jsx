import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createCow, updateCow } from '../redux/features/cows/cowSlice';
import { createbirth, Updatebirth } from '../redux/features/birth/birthSlice';
import { PulseLoader } from 'react-spinners';

export const FormBirth = ({currentcow,closeModal}) => {
    const [date, setdate] = useState(currentcow ? currentcow.date : "")
    const [Cow_number, setCow_number] = useState(currentcow ? currentcow.Cow_number : "")
    const { loading } = useSelector((state) => state.births)

    const dispatch = useDispatch()
    
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentcow) {
            const formData = {date, Cow_number }
            const id = currentcow.id
            dispatch(Updatebirth({formData,id}));
        } else {
            const formData = {Cow_number, date }
            dispatch(createbirth(formData))
        }
        closeModal();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">
                    {currentcow ? 'Update Cow' : t('add_birth')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block"> {t('mother_cow_number')} </label>
                        <input
                            type="text"
                            name="Cow_number"
                            defaultValue={currentcow ? currentcow.Cow_number : ""}
                            onChange={(e) => setCow_number(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block"> {t('Date_of_birth')} </label>
                        <input
                            type="date"
                            name="entryDate"
                            defaultValue={currentcow ? currentcow.date : ""}
                            onChange={(e) => setdate(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
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
                            {loading ? <PulseLoader color="#B8B8B8" loading={true} size={15} /> : currentcow ? t('update_cow') : t('create_cow')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
