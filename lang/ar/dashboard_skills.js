export default {
  users_statistics:'احصائيات المهارات',
  search:'بحث',
  delete:'مسح',
  edit:'تعديل',
  select_best_choice:'اختر ما يناسبك',
  add_item:'اضافة عنصر جديد',
  control:'التحكم',
  total:'مجموع العناصر',
  filters:[
    {
      name:'الاسم',
      input:'title',
      type:'text',
    },
    {
      name:'تابع ل',
      input:'sk_group_id',
      type:'select',
    },
    {
      name:'بداية التاريخ',
      input:'start_date',
      type:'date',
    },
    {
      name:'نهاية التاريخ',
      input:'end_date',
      type:'date',
    },
  ],

  table:{
    ar_name:'الاسم بالعربي',
    en_name:'الاسم بالانجليزي',
    ar_desc:'الوصف بالعربي',
    en_desc:'الوصف بالانجليزي',
    related_to:'تابع ل',
    note:'ملاحظة',
  },
}
