// ./schemas/documents/referenz.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'referenz',
  title: 'Referenz',
  type: 'document',

  // Tabs (field groups)
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'content', title: 'Content'},
    {name: 'ergebnis', title: 'Ergebnis'},
    {name: 'eckdaten', title: 'Eckdaten'},
    {name: 'categoryGroup', title: 'Kategorie'}, // <— neu: andere ID!

    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Einstellungen'},
  ],

  fields: [
    // --- Einstellungen / Slug ---
    defineField({
      name: 'title',
      title: 'Interner Titel',
      type: 'string',
      description: 'Nur für die Übersicht im Studio (nicht zwingend sichtbar auf der Seite).',
      validation: (Rule) => Rule.required(),
      group: 'settings',
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: {
        source: 'title', // oder 'title'
        slugify: (input) => {
          return (
            input
              .toLowerCase()
              .trim()
              // deutsche Umlaute ersetzen
              .replace(/ä/g, 'ae')
              .replace(/ö/g, 'oe')
              .replace(/ü/g, 'ue')
              .replace(/ß/g, 'ss')
              // alles andere in Bindestriche umwandeln
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/--+/g, '-')
              .replace(/^-+|-+$/g, '')
              .slice(0, 96)
          )
        },
      },
      validation: (Rule) => Rule.required(),
      group: 'settings',
    }),

    // --- Hero ---
    defineField({
      name: 'heroTitle',
      title: 'Hero Headline',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}], // KEINE H-Styles, nur inline
          lists: [], // keine Listen
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
              {title: 'Primärfarbe', value: 'primary', icon: () => '🎨'},
              {title: 'Akzentfarbe', value: 'accent', icon: () => '✨'},
              {title: 'Underline', value: 'underline'},
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
      title: 'Hero Bild (optional)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
      group: 'hero',
    }),

    // --- Content ---
    defineField({
      name: 'contentTitle',
      title: 'Content Titel',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'contentIntro',
      title: 'Content Intro',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'contentText',
      title: 'Content Text',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'contentImages',
      title: 'Content Bilder (Galerie)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
        },
      ],
      options: {layout: 'grid'},
      group: 'content',
    }),

    // --- Ergebnis ---
    defineField({
      name: 'ergebnisText',
      title: 'Ergebnis Text',
      type: 'array',
      of: [{type: 'block'}],
      group: 'ergebnis',
    }),
    defineField({
      name: 'ergebnisImage',
      title: 'Ergebnis Bild',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'ALT Text', type: 'string'}],
      group: 'ergebnis',
    }),

    // --- Eckdaten ---
    defineField({
      name: 'datum',
      title: 'Datum',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      group: 'eckdaten',
    }),
    defineField({
      name: 'ort',
      title: 'Ort',
      type: 'string',
      group: 'eckdaten',
    }),
    defineField({
      name: 'auftraggeber',
      title: 'Auftraggeber',
      type: 'string',
      group: 'eckdaten',
    }),

    // --- Kategorie ---
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'reference',
      to: [{type: 'kategorie'}],
      group: 'categoryGroup',
    }),

    // --- SEO ---
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo', // <- uses the object above
      group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'ort',
      media: 'heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Referenz',
        subtitle: subtitle ? `Ort: ${subtitle}` : 'Ohne Ort',
        media,
      }
    },
  },
})
