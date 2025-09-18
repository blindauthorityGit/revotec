import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'beratungPage',
  title: 'Beratung buchen',
  type: 'document',

  groups: [
    {name: 'content', title: 'Inhalt', default: true},
    {name: 'contact', title: 'Kontakt'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    // --- Inhalt ---
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'intro',
      title: 'Text (Rich Text)',
      type: 'array',
      of: [
        {
          type: 'block',
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
      group: 'content',
    }),

    // --- Kontakt ---
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((val) =>
          !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? true : 'Bitte gültige E-Mail angeben',
        ),
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Adresse (optional)',
      type: 'text',
      rows: 3,
      group: 'contact',
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
    select: {title: 'headline'},
    prepare({title}) {
      return {title: title || 'Beratung buchen'}
    },
  },
})
