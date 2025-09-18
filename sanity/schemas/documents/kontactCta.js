import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'kontaktCta',
  title: 'KontaktCTA',
  type: 'document',

  groups: [
    {name: 'content', title: 'Inhalt', default: true},
    {name: 'contact', title: 'Kontakt'},
  ],

  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'text',
      title: 'Text (Rich Text)',
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
        Rule.custom((v) =>
          !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Bitte gültige E-Mail angeben',
        ),
      group: 'contact',
    }),
  ],

  preview: {
    select: {title: 'headline', subtitle: 'email'},
    prepare({title, subtitle}) {
      return {title: title || 'KontaktCTA', subtitle: subtitle || '—'}
    },
  },
})
