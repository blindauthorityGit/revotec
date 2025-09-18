import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Einleitung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bullets',
      title: 'Liste / Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'object',
      fields: [
        defineField({
          name: 'internal',
          title: 'Interner Link',
          type: 'reference',
          to: [
            {type: 'referenz'},
            {type: 'kategorie'},
            {type: 'leistung'}, // <— NEU: einzelne Leistungsseite
          ],
          options: {
            disableNew: true,
            // v3: filter kann eine Funktion sein, um den aktuellen Doc-Kontext zu bekommen
          },
        }),
        defineField({
          name: 'external',
          title: 'Externer Link',
          type: 'url',
        }),
      ],
    }),
  ],

  preview: {
    select: {title: 'title', subtitle: 'intro'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Service Card',
        subtitle: subtitle?.slice(0, 50) || '',
      }
    },
  },
})
