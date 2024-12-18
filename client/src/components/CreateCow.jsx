import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createCow, updateCow } from '../redux/features/cows/cowSlice';
import { PulseLoader } from 'react-spinners';

const CreateCow = ({ currentcow, closeModal }) => {
    const [Date_of_entry, setDate_of_entry] = useState(currentcow ? currentcow.Date_of_entry : "")
    const [Cow_number, setCow_number] = useState(currentcow ? currentcow.Cow_number : "")
    const [lineage, setlineage] = useState(currentcow ? currentcow.lineage : "الهولشتاين")
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.cows)
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentcow) {
            const formData = { Date_of_entry, lineage }
            const id = currentcow.Cow_number
            dispatch(updateCow({ formData, id }));
        } else {
            dispatch(createCow({ Cow_number, Date_of_entry, lineage }))
        }
        closeModal();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">
                    {currentcow ? 'Update Cow' : t('create_cow')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block"> {t('cow_Number')} </label>
                        <input
                            type="text"
                            name="Cow_number"
                            defaultValue={currentcow ? currentcow.Cow_number : ""}
                            onChange={(e) => setCow_number(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block"> {t('Date_of_entry')} </label>
                        <input
                            type="date"
                            name="entryDate"
                            defaultValue={currentcow ? currentcow.Date_of_entry : ""}
                            onChange={(e) => setDate_of_entry(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block">{t('lineage')}</label>
                        <select
                            name="lineage"
                            onChange={(e) => setlineage(e.target.value)}
                            defaultValue={currentcow ? currentcow.lineage : ""}
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
                            {loading ? <PulseLoader color="#B8B8B8" loading={true} size={15} /> : currentcow ? t('update_cow') : t('create_cow')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCow
