import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'logosSettings',
  title: 'Logos',
  type: 'document',

  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
        },
      ],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {media: 'logos.0'},
    prepare({media}) {
      return {
        title: 'Logos',
        subtitle: 'Logo-Liste (Settings)',
        media,
      }
    },
  },
})
