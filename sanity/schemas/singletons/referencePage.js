// ./schemas/documents/referencesPage.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'referencesPage',
  title: 'Referenz Übersicht',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    // --- Hero ---
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
              {
                title: 'Primärfarbe',
                value: 'primary',
                icon: () => '🎨',
              },
              {
                title: 'Akzentfarbe',
                value: 'accent',
                icon: () => '✨',
              },
            ],
          },
          styles: [{title: 'Normal', value: 'normal'}], // keine H2/H3 nötig, nur Inline
          lists: [], // keine Listen erlaubt
        },
      ],
      validation: (Rule) => Rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro Text',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),

    // --- Content ---
    defineField({
      name: 'contentIntro',
      title: 'Content Intro (Rich Text)',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),

    // --- SEO ---
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],

  preview: {
    select: {title: 'heroHeadline'},
    prepare({title}) {
      return {
        title: title?.[0]?.children?.[0]?.text || 'Referenz Übersicht',
      }
    },
  },
})
