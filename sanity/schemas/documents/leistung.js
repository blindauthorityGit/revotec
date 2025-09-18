import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'leistung',
  title: 'Leistung',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'content', title: 'Content'},
    {name: 'benefits', title: 'Ihre Vorteile'},
    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Einstellungen'},
  ],

  fields: [
    // --- Einstellungen / Slug ---
    defineField({
      name: 'title',
      title: 'Interner Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'settings',
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/--+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
      group: 'settings',
    }),

    // --- Hero ---
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
      validation: (Rule) => Rule.required(),
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
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
      name: 'sections',
      title: 'Abschnitte (Text / Image)',
      type: 'array',
      of: [{type: 'textImage'}], // <- Objekt existiert bereits
      group: 'content',
    }),

    // --- Vorteile ---
    defineField({
      name: 'benefitsTitle',
      title: 'Vorteile Headline (optional)',
      type: 'string',
      initialValue: 'Ihre Vorteile',
      group: 'benefits',
    }),
    defineField({
      name: 'benefits',
      title: 'Vorteile',
      type: 'array',
      of: [{type: 'string'}],
      group: 'benefits',
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
    select: {
      title: 'title',
      hero: 'heroHeadline',
    },
    prepare({title, hero}) {
      const heroPlain = hero?.[0]?.children?.map((c) => c.text).join('') || ''
      return {
        title: title || heroPlain || 'Leistung',
        subtitle: heroPlain ? `Hero: ${heroPlain.slice(0, 60)}` : '',
      }
    },
  },
})
