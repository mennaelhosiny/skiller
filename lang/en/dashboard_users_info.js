export default {
  profile:{
    skills:'Skills',
    projects:'Projects',
    certificates:'Certificates',
    educations:'Educations',
    languages:'Languages',
    experience:'Experience',
  },
  related_to:'Related to ',
  actions:{
    name:'Actions',
    edit:'Edit',
    delete:'Delete',
  },
  languages: [
    {
      name:'Language name',
      input:'name',
      type:'text',
    },
    {
      name:'Level',
      input:'level',
      type:'select',
    },
  ],
  educations: [
    {
      name:'School or university',
      input:'name',
      type:'text',
    },
    {
      name:'Level',
      input:'grade',
      type:'select',
    },
    {
      name:'Country',
      input:'country',
      type:'select',
    },
    {
      name:'City',
      input:'city',
      type:'select',
    },
    {
      name:'Start date',
      input:'start_date',
      type:'date',
    },
    {
      name:'End date',
      input:'end_date',
      type:'date',
    },
    {
      name:'Description',
      input:'info',
      type:'textarea',
    },


  ],
  skills: [
    {
      name:'Skill name',
      input:'name',
      type:'text',
    },
    {
      name:'Sub skill(optional)',
      input:'sub_skill',
      type:'text',
    },
    {
      name:'Level',
      input:'level',
      type:'select',
    },
  ],
  projects: [
    {
      name:'Project name',
      input:'name',
      type:'text',
    },
    {
      name:'Start date',
      input:'start_date',
      type:'date',
    },
    {
      name:'End date',
      input:'end_date',
      type:'date',
    },
    {
      name:'Description',
      placeholder:'Enter short description',
      input:'info',
      type:'textarea',
    },
  ],
  experience: [
    {
      name:'Company',
      placeholder:'Enter company name',
      input:'name',
      type:'text',
    },
    {
      name:'Job title(optional)',
      input:'title',
      type:'text',
    },
    {
      name:'Country',
      input:'country',
      type:'select',
    },
    {
      name:'City',
      input:'city',
      type:'select',
    },
    {
      name:'Start date',
      input:'start_date',
      type:'date',
    },
    {
      name:'End date',
      input:'end_date',
      type:'date',
    },
    {
      name:'Description',
      placeholder:'Enter short description',
      input:'info',
      type:'textarea',
    },


  ],
  certificates: [
    {
      name:'Certificate',
      placeholder:'Upload your certificate here',
      input:'file',
      type:'certificate',
    },
  ]


}
