import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'historyBlock',
  title: 'Geschichts-Abschnitt (Text + Bild)',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text (Rich Text)',
      type: 'array',
      of: [{type: 'block'}],
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bild (optional)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
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
  ],
  preview: {
    select: {media: 'image', text: 'text'},
    prepare({media, text}) {
      const first = text?.[0]?.children?.map((c) => c.text).join('') || 'Geschichte'
      return {title: first.slice(0, 60), media}
    },
  },
})
