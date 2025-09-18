import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Leistungen Übersicht',
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
              {title: 'Primärfarbe', value: 'primary', icon: () => '🎨'},
              {title: 'Akzentfarbe', value: 'accent', icon: () => '✨'},
            ],
          },
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
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
    defineField({
      name: 'cards',
      title: 'Service Cards',
      type: 'array',
      of: [{type: 'serviceCard'}],
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
        title: title?.[0]?.children?.[0]?.text || 'Leistungen Übersicht',
      }
    },
  },
})
