// deskStructure.js
const singletonItem = (S, title, type, id) =>
  S.listItem().title(title).child(S.editor().schemaType(type).documentId(id))

export default (S) =>
  S.list()
    .title('Content')
    .items([
      // SEITEN
      S.listItem()
        .title('SEITEN')
        .child(
          S.list()
            .title('SEITEN')
            .items([
              // Singleton: Startseite
              singletonItem(S, 'Startseite', 'startPage', 'startPage'),

              singletonItem(S, 'Referenz Übersicht', 'referencesPage', 'referencesPage'),

              singletonItem(S, 'Leistungen Übersicht', 'servicesPage', 'servicesPage'),

              singletonItem(S, 'Team Seite', 'teamPage', 'teamPage'),

              singletonItem(S, 'News Übersicht', 'newsPage', 'newsPage'),

              singletonItem(S, 'Beratung buchen', 'beratungPage', 'beratungPage'),

              // Collection: Referenzen (beliebig viele)
              S.listItem()
                .title('Referenzen')
                .schemaType('referenz')
                .child(
                  S.documentTypeList('referenz')
                    .title('Referenzen')
                    .defaultOrdering([
                      {field: 'datum', direction: 'desc'},
                      {field: 'heroTitle', direction: 'asc'},
                    ]),
                ),

              S.listItem()
                .title('Leistungen')
                .schemaType('leistung')
                .child(
                  S.documentTypeList('leistung')
                    .title('Leistungen')
                    .defaultOrdering([{field: 'title', direction: 'asc'}]),
                ),
              S.listItem()
                .title('News')
                .schemaType('news')
                .child(
                  S.documentTypeList('news')
                    .title('News')
                    .defaultOrdering([{field: 'date', direction: 'desc'}]),
                ),
            ]),
        ),

      // SETTINGS
      S.listItem()
        .title('SETTINGS')
        .child(
          S.list()
            .title('SETTINGS')
            .items([
              singletonItem(S, 'Kontakt Settings', 'contactSettings', 'contactSettings'),
              // weitere Settings …
              // NEU: Kategorien
              S.listItem()
                .title('Kategorien')
                .schemaType('kategorie')
                .child(S.documentTypeList('kategorie').title('Kategorien')),
              S.listItem()
                .title('Logos')
                .child(S.editor().schemaType('logosSettings').documentId('logosSettings')),
              S.listItem()
                .title('KontaktCTA')
                .child(S.editor().schemaType('kontaktCta').documentId('kontaktCta')),

              S.listItem()
                .title('CTABanner')
                .child(S.editor().schemaType('ctaBanner').documentId('ctaBanner')),
            ]),
        ),
    ])
