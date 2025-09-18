// ./schemas/objects/seo.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Ideally ≤ 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Ideally ≤ 160 characters'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image / Social Share',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL (optional)',
      type: 'url',
    }),
    defineField({
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      description: 'Set to true to ask search engines not to index this page.',
      initialValue: false,
    }),
    defineField({
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      description: 'Set to true to ask search engines not to follow links on this page.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title', description: 'description', media: 'ogImage'},
    prepare({title, description, media}) {
      return {
        title: title || 'SEO',
        subtitle: description || 'No description yet',
        media,
      }
    },
  },
})
