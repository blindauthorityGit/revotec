import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teamPage',
  title: 'Team Seite',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'team', title: 'Team'},
    {name: 'history', title: 'Geschichte'},
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
          styles: [{title: 'Normal', value: 'normal'}], // inline only
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Primärfarbe', value: 'primary', icon: () => '🎨'},
              {title: 'Akzentfarbe', value: 'accent', icon: () => '✨'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [{name: 'href', title: 'URL', type: 'url'}],
              },
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

    // --- Team ---
    defineField({
      name: 'members',
      title: 'Team Mitglieder',
      type: 'array',
      of: [{type: 'teamMember'}],
      group: 'team',
    }),

    // --- Geschichte ---
    defineField({
      name: 'historyTitle',
      title: 'Geschichte Headline (optional)',
      type: 'string',
      initialValue: 'Wie alles begann',
      group: 'history',
    }),
    defineField({
      name: 'history',
      title: 'Geschichte (Abschnitte)',
      type: 'array',
      of: [{type: 'historyBlock'}],
      group: 'history',
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
    select: {hh: 'heroHeadline'},
    prepare({hh}) {
      return {title: hh?.[0]?.children?.map((c) => c.text).join('') || 'Team Seite'}
    },
  },
})
