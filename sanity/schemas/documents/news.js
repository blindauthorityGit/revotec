// ./schemas/documents/news.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',

  fields: [
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'headline',
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/--+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 96),
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Bild',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
    }),
    defineField({
      name: 'body',
      title: 'Inhalt (Rich Text mit Bildern)',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],

  preview: {
    select: {title: 'headline', subtitle: 'date', media: 'image'},
    prepare({title, subtitle, media}) {
      return {title, subtitle, media}
    },
  },
})
