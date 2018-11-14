module.exports = {
  title: 'Assitan Koné - JavaScript Developer',
  head: [
    ['link', { rel: 'icon', href: '/logo-ak.ico' }]
  ],
  description: 'Assitan Koné - JavaScript Developer',
  ga: 'UA-29898246-1',
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Assitan Koné',
      description: 'Assitan Koné - Développeuse JavaScript',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Assitan Koné',
      description: 'Assitan Koné - JavaScript Developer',
    },
  },
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    docsDir: 'docs',
    search: false,
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Langues',
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
      }
    } 
  },
};
