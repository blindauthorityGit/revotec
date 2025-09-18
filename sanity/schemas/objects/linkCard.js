// /schemas/objects/linkCard.js
export default {
  name: 'linkCard',
  title: 'Link-Card',
  type: 'object',
  fields: [
    {name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()},
    {name: 'excerpt', title: 'Kurztext', type: 'text', rows: 3},
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', title: 'Alt-Text', type: 'string', validation: (r) => r.required()},
        {name: 'focalNote', title: 'Fokus-Hinweis', type: 'string'},
      ],
      validation: (r) => r.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link', // dein vorhandenes Link-Object (intern/extern)
      validation: (r) => r.required(),
    },
    {name: 'tag', title: 'Tag/Label (optional)', type: 'string'},
  ],
  preview: {
    select: {title: 'title', subtitle: 'tag', media: 'image'},
    prepare({title, subtitle, media}) {
      return {title, subtitle: subtitle || 'Link-Card', media}
    },
  },
}
