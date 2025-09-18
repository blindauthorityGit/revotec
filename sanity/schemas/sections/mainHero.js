export default {
  name: 'mainHero',
  title: 'Main Hero',
  type: 'object',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow', type: 'string'},
    {name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()},
    {name: 'subline', title: 'Subline', type: 'text'},
    {
      name: 'media',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', validation: (r) => r.required()}],
    },
    {
      name: 'actions',
      title: 'Buttons/Links',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'alignment',
      title: 'Ausrichtung',
      type: 'string',
      options: {list: ['left', 'center', 'right']},
      initialValue: 'left',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {list: ['light', 'dark']},
      initialValue: 'light',
    },
  ],
  preview: {
    select: {title: 'headline', media: 'media'},
    prepare({title, media}) {
      return {title: `Hero: ${title || '—'}`, media}
    },
  },
}
