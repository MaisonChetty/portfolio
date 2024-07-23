

export default{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:"Title of project",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Iamge',
      type: 'image',
      options:{
        hotspot:true,
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:"reference", to: {type: "skill"}}],
    },
    {
      name: 'linkToBuilds',
      title: 'LinkToBuilds',
      type: 'string',
    },
  ],
}
