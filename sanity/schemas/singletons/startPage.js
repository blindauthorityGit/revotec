import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'startPage',
  title: 'Startseite',
  type: 'document',
  options: {singleton: true},
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Start',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      readOnly: true,
      initialValue: {current: '/'},
    }),
    defineField({
      name: 'sections',
      title: 'Sections (Page Builder)',
      type: 'array',
      of: [
        {type: 'mainHero'},
        {type: 'servicesShowcase'}, // ⬅️ neu
        {type: 'textImage'}, // ⬅️ neu
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {select: {title: 'title'}},
})
