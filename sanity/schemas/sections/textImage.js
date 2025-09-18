import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'textImage',
  title: 'Text / Image',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro (optional)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Rich Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label', type: 'string'},
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {name: 'url', title: 'Externe URL', type: 'url'},
            {
              name: 'internal',
              title: 'Interner Verweis',
              type: 'reference',
              to: [
                {type: 'referenz'},
                {type: 'referencesPage'},
                {type: 'startPage'},
                {type: 'teamPage'},
                {type: 'servicesPage'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageSide',
      title: 'Bildposition',
      type: 'string',
      options: {
        list: [
          {title: 'Rechts', value: 'right'},
          {title: 'Links', value: 'left'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
    }),
    defineField({
      name: 'background',
      title: 'Hintergrund',
      type: 'string',
      options: {
        list: [
          {title: 'Standard (weiß)', value: 'white'},
          {title: 'Hell (grau)', value: 'light'},
          {title: 'Dunkel', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'paddingY',
      title: 'Vertikales Padding',
      type: 'string',
      options: {
        list: [
          {title: 'Kompakt', value: 'py-10'},
          {title: 'Normal', value: 'py-16'},
          {title: 'Groß', value: 'py-24'},
        ],
      },
      initialValue: 'py-16',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      media: 'image',
      side: 'imageSide',
    },
    prepare({title, media, side}) {
      return {
        title: title || 'Text / Image',
        subtitle: side === 'left' ? 'Bild links' : 'Bild rechts',
        media,
      }
    },
  },
})
