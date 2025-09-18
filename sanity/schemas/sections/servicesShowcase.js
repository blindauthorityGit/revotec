// /schemas/sections/servicesShowcase.js
export default {
  name: 'servicesShowcase',
  title: 'Leistungen – Text & Karten',
  type: 'object',
  fields: [
    // Linke Spalte
    {name: 'eyebrow', title: 'Eyebrow (klein, optional)', type: 'string'},
    {name: 'title', title: 'Überschrift', type: 'string', validation: (r) => r.required()},
    {
      name: 'intro',
      title: 'Introtext',
      type: 'text',

      description: 'Kurzer Lead-Text links',
    },
    {name: 'cta', title: 'CTA-Link unter dem Text (optional)', type: 'link'},

    // Rechte Spalte
    {
      name: 'cards',
      title: 'Karten rechts',
      type: 'array',
      of: [{type: 'linkCard'}],
      validation: (r) => r.min(1).max(6),
    },

    // Darstellung
    {
      name: 'layout',
      title: 'Layout-Optionen',
      type: 'object',
      fields: [
        {
          name: 'columns',
          title: 'Spalten (Desktop)',
          type: 'number',
          options: {list: [2, 3, 4]},
          initialValue: 3,
        },
        {
          name: 'imageRatio',
          title: 'Bildverhältnis',
          type: 'string',
          options: {
            list: [
              {title: '4:5', value: '4/5'},
              {title: '3:4', value: '3/4'},
              {title: '1:1', value: '1/1'},
              {title: '16:9', value: '16/9'},
            ],
          },
          initialValue: '4/5',
        },
        {
          name: 'overlay',
          title: 'Bild-Overlay (Dunkelheit)',
          type: 'number',
          description: '0 = kein Overlay, 100 = komplett schwarz',
          validation: (r) => r.min(0).max(100),
          initialValue: 40,
        },
      ],
    },
    {name: 'anchorId', title: 'Section-Anker (optional)', type: 'string'},
  ],
  preview: {
    select: {
      title: 'title',
      count: 'cards.length',
    },
    prepare({title, count}) {
      return {
        title: `Leistungen – ${title || 'Ohne Titel'}`,
        subtitle: `${count || 0} Karte(n)`,
      }
    },
  },
}
