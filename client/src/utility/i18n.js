import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "logo":"Milk Production Company Management",
        "home":"Home",
        "Medical_examination":"Medical examination",
        "Births":"Births",
        "Milk_production":"Milk production",
        "buttonWelcome":"Get Start",
        "title":"Milk production company",
        "welcome": "Welcome",
        "cow_list": "Cow List",
        "cow_Number":"Nember cow",
        "Date_of_entry":"Date of entry",
        "lineage":"lineage",
        "action_update":"Update",
        "action_delete":"Delete",
        "Medical_check-up":"Medical check-up",
        "action":"action",
        "create_cow": "Create Cow",
        "update_cow": "Update Cow",
        "resultcows":"No cows",
        "medicalExam_list": "Medical checklist for cows",
        "title_exam":"Add medical examination for cow No.",
        "button_exam":"Create medical examination",
        "disease":"disease",
        "update_medicalExam": "Update the scan",
        "resultmedicalExams":"No check",
        "Examination_date":"Examination date",
        "birth_list":"Birth list",
        "Date_of_birth":"Date of birth",
        "mother_cow_number":"mother cow number",
        "add_birth":"Create Birth",
        "today":"Today",
        "resultMilkProduction":"No daily milk production",
        "create_milk":"Create Milk Production",
        "update_milk":"Daily milk update",
        "titleMilk":"Daily milk production",
        "Amount_of_milk":"Amount of milk in liters",
        "dark_mode": "Dark Mode",
        "light_mode": "Light Mode",
        "name": "Name",
        "submitCow": "Cow registration",
        "delete": "Delete",
        "update": "Update",
      },
    },
    ar: {
      translation: {
        "logo":"إدارة شركة إنتاج الحليب",
        "home":"الرئيسية",
        "Medical_examination":"الفحص الطبي",
        "Births":"الولادات",
        "Milk_production":"إنتاج الحلي",
        "buttonWelcome":"البدء",
        "title":"شركة إلنتاج الحليب",
        "welcome": "مرحبا",
        "cow_list": "قائمة الأبقار",
        "cow_Number":"رقم البقرة",
        "Date_of_entry":" تاريخ دخولها",
        "lineage":"سلالة",
        "action_update":"تعديل",
        "action_delete":"حذف",
        "Medical_check-up":"فحص الطبي",
        "action":"فعل",
        "create_cow": "إضافة بقرة",
        "update_cow": "تحديث البقرة",
        "resultcows":"لا يوجد بقر",
        "medicalExam_list": "قائمة الفحص الطبي للبقر",
        "title_exam":"إضافة فحص طبي للبقرة رقم",
        "button_exam":"اضافة فحص طبي",
        "disease":"المرض",
        "update_medicalExam": "تحديث الفحص",
        "resultmedicalExams":"لا يوجد فحص",
        "Examination_date":"تاريخ الفحص",
        "birth_list":" قائمة الولادات",
        "add_birth":"اضافة ولادة",
        "Date_of_birth":"تاريخ الميلاد",
        "mother_cow_number":"رقم بقرة الام",
        "resultMilkProduction":"لا يوجد انتاج الحليب اليومي",
        "create_milk":"اضافة الحليب",
        "update_milk": "تحديث الحليب اليومي",
        "titleMilk":"انتاج الحليب اليومي",
        "today":"اليوم",
        "Amount_of_milk":"كمية الحليب بالتر",
        "dark_mode": "الوضع الداكن",
        "light_mode": "الوضع الفاتح",
        "name": "الاسم",
        "submitCow": "تسجيل البقر",
        "delete": "حذف",
        "update": "تحديث",
      },
    },
  },
  lng: 'ar', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
