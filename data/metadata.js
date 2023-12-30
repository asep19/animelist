export const metadata = {
  title: {
    template: '%s | Kyaa',
    default: 'Anime | Kyaa'
  },
  description: 'Place where you can search, create collection and filter anime',
  generator: 'Anime Sae',
  applicationName: 'Kyaa',
  referrer: 'origin-when-cross-origin',
  keywords: ['Anime', 'Search Anime', 'Streaming Anime', 'Anime list'],
  authors:{
    name: 'asep',
    url: 'https::/aseprendi.dev'
  },
  creator: 'asep',
  publisher: 'Kya inc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'kyaa',
    description: 'Search anime',
    url: 'https://kyaa.com',
    siteName: 'kyaa',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'kyaa-chan'
      },
    ],
    locale: 'en_US',
    type: 'website'
  }
}
