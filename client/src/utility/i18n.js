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
        "create_cow": "Create Cow",
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
        "create_cow": "إضافة بقرة",
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