
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'CompanyIamge',
      type: 'image',
      options:{
        hotspot:true,
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'DataeSarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DataeEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:"reference", to: {type: "skill"}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type: "string"}]
    },
  ],
}
