// /schemas/index.js
import startPage from '../schemas/singletons/startPage'
import referenz from '../schemas/documents/referenz'
import leistung from '../schemas/documents/leistung'
import ctaBanner from '../schemas/documents/ctaBanner'
import kontaktCta from '../schemas/documents/kontactCta'
import news from '../schemas/documents/news'
import contactSettings from '../schemas/singletons/contactSettings'
import referencesPage from '../schemas/singletons/referencePage'
import servicesPage from '../schemas/singletons/servicePage'
import teamPage from '../schemas/singletons/teamPage'
import newsPage from '../schemas/singletons/newsPage'
import beratungPage from '../schemas/singletons/beratungPage'

import mainHero from '../schemas/sections/mainHero'
import textImage from '../schemas/sections/textImage'
import link from '../schemas/objects/link'
import seo from '../schemas/objects/seo'
import historyBlock from '../schemas/objects/historyBlock'
import teamMember from '../schemas/objects/teamMember'
import kategorie from '../schemas/documents/kategorie'
import logosSettings from '../schemas/documents/logoSettings'
import linkCard from '../schemas/objects/linkCard'
import serviceCard from '../schemas/objects/serviceCard'
import servicesShowcase from '../schemas/sections/servicesShowcase'

export const schemaTypes = [
  startPage,
  contactSettings,
  mainHero,
  link,
  linkCard,
  servicesShowcase,
  seo,
  referenz,
  kategorie,
  referencesPage,
  logosSettings,
  textImage,
  servicesPage,
  serviceCard,
  leistung,
  teamPage,
  historyBlock,
  teamMember,
  news,
  newsPage,
  beratungPage,
  kontaktCta,
  ctaBanner,
]
