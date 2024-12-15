import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createMilkProduction, updateMilkProduction } from '../redux/features/milkProduction/milkProdutionSlice';
import { PulseLoader } from 'react-spinners';

const FormMilkProduction = ({ currentmilk, closeModal }) => {
    const [date, setdate] = useState(currentmilk ? currentmilk.date : "")
    const [milkAmount, setmilkAmount] = useState(currentmilk ? currentmilk.milkAmount : "")
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.milkProductions)

    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentmilk) {
            const formData = { date, milkAmount }
            const id = currentmilk.id
            dispatch(updateMilkProduction({ formData, id }));
        } else {
            dispatch(createMilkProduction({ date, milkAmount }))
        }
        closeModal();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">
                    {currentmilk ? t('update_milk') : t('create_milk')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block"> {t('today')} </label>
                        <input
                            type="date"
                            name="entryDate"
                            defaultValue={currentmilk ? currentmilk.date : ""}
                            onChange={(e) => setdate(e.target.value)}
                            className="border p-2 dark:text-gray-800 w-full"
                        />
                    </div>
                    <div>
                        <label className="block"> {t('Amount_of_milk')} </label>
                        <input
                            type="number"
                            name=""
                            defaultValue={currentmilk ? currentmilk.milkAmount : ""}
                            onChange={(e) => setmilkAmount(e.target.value)}
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
                            {loading ? <PulseLoader color="#B8B8B8" loading={true} size={15} />  :currentmilk ? t('update_milk') : t('create_milk')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormMilkProduction
