import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaBanner',
  title: 'CTABanner',
  type: 'document',

  groups: [
    {name: 'content', title: 'Inhalt', default: true},
    {name: 'cta', title: 'Button'},
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
      name: 'subline',
      title: 'Subline / Intro',
      type: 'text',
      rows: 3,
      group: 'content',
    }),

    // Button
    defineField({
      name: 'ctaLabel',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'cta',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({
          name: 'internal',
          title: 'Interner Link',
          type: 'reference',
          to: [
            {type: 'referenz'},
            {type: 'leistung'},
            {type: 'referencesPage'},
            {type: 'servicesPage'},
            {type: 'beratungPage'},

            // ggf. weitere Seitentypen ergänzen
          ],
          options: {disableNew: true},
        }),
        defineField({
          name: 'external',
          title: 'Externer Link',
          type: 'url',
        }),
      ],
    }),
  ],

  preview: {
    select: {title: 'headline', subtitle: 'ctaLabel'},
    prepare({title, subtitle}) {
      return {title: title || 'CTA Banner', subtitle: subtitle ? `Button: ${subtitle}` : '—'}
    },
  },
})
