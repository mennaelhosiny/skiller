export default {
  profile:{
    skills:'مهارات',
    projects:'مشاريع',
    certificates:'شهادات',
    educations:'تعليم',
    languages:'لغات',
    experience:'خبرات سابقة',
  },
  related_to:'الخاصة ب',
  actions:{
    name:'الاوامر',
    edit:'تعديل',
    delete:'مسح',
  },
  languages: [
    {
      name:'اسم اللغة',
      input:'name',
      type:'text',
    },
    {
      name:'المستوي',
      input:'level',
      type:'select',
    },
  ],
  educations: [
    {
      name:'المدرسة او الجامعة',
      input:'name',
      type:'text',
    },
    {
      name:'المستوي',
      input:'grade',
      type:'select',
    },
    {
      name:'الدولة',
      input:'country',
      type:'select',
    },
    {
      name:'المدينة',
      input:'city',
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
    {
      name:'الوصف',
      input:'info',
      type:'textarea',
    },


  ],
  skills: [
    {
      name:'اسم المهارة',
      input:'name',
      type:'text',
    },
    {
      name:'مهارة فرعية(اختياري)',
      input:'sub_skill',
      type:'text',
    },
    {
      name:'المستوي',
      input:'level',
      type:'select',
    },
  ],
  projects: [
    {
      name:'اسم المشروع',
      input:'name',
      type:'text',
    },
    {
      name:'تاريخ البداية',
      input:'start_date',
      type:'date',
    },
    {
      name:'تاريخ النهاية',
      input:'end_date',
      type:'date',
    },
    {
      name:'الوصف',
      placeholder:'اكتب وصف مختصر',
      input:'info',
      type:'textarea',
    },
  ],
  experience: [
    {
      name:'الشركة',
      placeholder:'ادخل اسم  الشركة',
      input:'name',
      type:'text',
    },
    {
      name:'عنوان الوظيفة(اختياري)',
      input:'title',
      type:'text',
    },
    {
      name:'الدولة',
      input:'country',
      type:'select',
    },
    {
      name:'المدينة',
      input:'city',
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
    {
      name:'الوصف',
      placeholder:'أكتب وصف  مختصر',
      input:'info',
      type:'textarea',
    },


  ],
  certificates: [
    {
      name:'الشهادة',
      placeholder:'ارفع صورة شهادتك هنا',
      input:'file',
      type:'certificate',
    },
  ]


}
