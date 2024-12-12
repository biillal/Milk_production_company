import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const CreateCow = ({setOpenCreate}) => {
    const [formData, setFormData] = useState({
        entryDate: '',
        lineage: 'الهولشتاين',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const { t } = useTranslation();

    return (
        <div className='absolute bg-slate-300 dark:bg-gray-800 top-0 left-0 w-[100%] h-screen '>
            <button onClick={()=>setOpenCreate(false)} className='text-end p-5 w-[100%] text-3xl dark:text-white  dark:bg-gray-800'>x</button>
            <div className="p-8  dark:bg-gray-800 lg:justify-center flex mt-36  w-[100%] dark:text-white  dark:w-[100%] ">
                <div className="lg:w-[50%] w-[100%]  -mt-36 border rounded-lg p-5 ">
                    <h2 className="text-2xl font-bold mb-4 text-center">تسجيل البقر</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">


                        <div>
                            <label className="block">تاريخ الدخول</label>
                            <input
                                type="date"
                                name="entryDate"
                                value={formData.entryDate}
                                onChange={handleChange}
                                className="border p-2 dark:text-gray-800 w-full"
                            />
                        </div>

                        <div>
                            <label className="block">السلالة</label>
                            <select
                                name="lineage"
                                value={formData.lineage}
                                onChange={handleChange}
                                className="border p-2 dark:text-gray-800 w-full"
                            >
                                <option value="الهولشتاين">الهولشتاين</option>
                                <option value="المونتبليارد">المونتبليارد</option>
                            </select>
                        </div>

                        <button type="submit" className="bg-blue-500 w-[100%] text-white px-4 py-2 rounded">
                            {t('submitCow')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCow
