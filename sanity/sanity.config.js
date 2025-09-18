import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import deskStructure from './deskStructure'
import {schemaTypes} from './schemaTypes'

// Alle Singletons hier pflegen:
const singletonTypes = new Set([
  'startPage',
  'contactSettings',
  'referencesPage',
  'logosSettings',
  'servicesPage',
  'teamPage',
  'newsPage',
  'beratungPage',
  // 'servicesPage','referencesPage','teamPage','blogPage','contactPage'
])

export default defineConfig({
  name: 'default',
  title: 'revotec',
  projectId: '2yy1o1fc',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Verhindert "Neu anlegen" für Singletons + entfernt "Duplizieren"
  document: {
    newDocumentOptions: (prev) => prev.filter((tpl) => !singletonTypes.has(tpl.templateId)),
    actions: (prev, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({action}) => action !== 'duplicate' && action !== 'unpublish') // unpublish bei Singletons meist unerwünscht
        : prev,
  },
})
