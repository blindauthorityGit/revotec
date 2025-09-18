export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {name: 'label', type: 'string', validation: (r) => r.required()},
    // interne Referenzen: erstmal NUR startPage (weil page noch nicht existiert)
    {
      name: 'internal',
      title: 'Interne Seite',
      type: 'reference',
      to: [
        {type: 'referenz'},
        {type: 'referencesPage'},
        {type: 'startPage'},
        {type: 'teamPage'},
        {type: 'servicesPage'},
        {type: 'leistung'},
      ],
    },
    // externe URL als Alternative
    {name: 'url', type: 'url'},
  ],
  validation: (Rule) =>
    Rule.custom((val) =>
      val?.internal || val?.url ? true : 'Bitte internen ODER externen Link angeben.',
    ),
  preview: {
    select: {label: 'label', internalTitle: 'internal.title', url: 'url'},
    prepare({label, internalTitle, url}) {
      return {
        title: label || internalTitle || url || 'Link',
        subtitle: internalTitle ? 'intern' : url ? 'extern' : '',
      }
    },
  },
}
