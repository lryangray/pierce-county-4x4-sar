import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pierce County 4x4 Search and Rescue | Volunteer Emergency Response Team',
  description: 'Pierce County 4x4 Search and Rescue is a volunteer organization providing emergency search and rescue services using specialized 4x4 vehicles. Serving Pierce County, Washington with wilderness rescue, missing person searches, and disaster response.',
  keywords: 'search and rescue, SAR, Pierce County, 4x4, emergency response, volunteer, wilderness rescue, Washington State, missing persons, disaster response',
  authors: [{ name: 'Pierce County 4x4 Search and Rescue' }],
  openGraph: {
    title: 'Pierce County 4x4 Search and Rescue',
    description: 'Volunteer emergency search and rescue team serving Pierce County, Washington. Specialized in 4x4 vehicle operations for wilderness and backcountry rescue missions.',
    url: 'https://piercecounty4x4sar.org',
    siteName: 'Pierce County 4x4 Search and Rescue',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pierce County 4x4 Search and Rescue Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pierce County 4x4 Search and Rescue',
    description: 'Volunteer emergency search and rescue team serving Pierce County, Washington.',
    images: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://piercecounty4x4sar.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pierce County 4x4 Search and Rescue',
    description: 'Volunteer search and rescue organization serving Pierce County, Washington',
    url: 'https://piercecounty4x4sar.org',
    logo: 'https://piercecounty4x4sar.org/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-253-555-0123',
      contactType: 'emergency',
      areaServed: 'Pierce County, Washington',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tacoma',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Pierce County, Washington',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Washington State Search and Rescue',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-navy-900">
        {children}
      </body>
    </html>
  )
}
