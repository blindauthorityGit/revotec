// ./schemas/documents/newsPage.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'newsPage',
  title: 'News Übersicht',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Primärfarbe', value: 'primary', icon: () => '🎨'},
              {title: 'Akzentfarbe', value: 'accent', icon: () => '✨'},
            ],
          },
        },
      ],
      validation: (R) => R.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'contentIntro',
      title: 'Intro (Rich Text)',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],

  preview: {
    select: {h: 'heroHeadline'},
    prepare({h}) {
      return {title: h?.[0]?.children?.[0]?.text || 'News Übersicht'}
    },
  },
})
