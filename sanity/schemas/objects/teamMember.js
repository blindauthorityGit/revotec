import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Mitglied',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
      validation: (R) => R.required(),
    }),
    defineField({name: 'name', title: 'Name', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'role', title: 'Titel / Rolle', type: 'string'}),
    defineField({
      name: 'bio',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'image'},
  },
})
