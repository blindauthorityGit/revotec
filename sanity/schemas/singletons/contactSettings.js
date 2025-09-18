import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactSettings',
  title: 'Kontakt Settings',
  type: 'document',
  options: {singleton: true},
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Kontakt',
    }),
    defineField({
      name: 'company',
      title: 'Firma',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Kontaktdaten',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Telefon', type: 'string'},
        {name: 'email', title: 'E-Mail', type: 'string'},
        {name: 'street', title: 'Straße', type: 'string'},
        {name: 'zip', title: 'PLZ', type: 'string'},
        {name: 'city', title: 'Ort', type: 'string'},
        {name: 'country', title: 'Land', type: 'string'},
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url'},
        {name: 'facebook', type: 'url'},
        {name: 'linkedin', type: 'url'},
        {name: 'github', type: 'url'},
      ],
    }),
    defineField({
      name: 'opening',
      title: 'Öffnungszeiten (optional)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'map',
      title: 'Kartenlink (Google/OSM)',
      type: 'url',
    }),
  ],
  preview: {
    select: {title: 'company'},
    prepare: ({title}) => ({title: title || 'Kontakt Settings'}),
  },
})
