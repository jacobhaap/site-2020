import Head from 'next/head'

export default ({
  title = 'AngelHacks – Dedicated to giving back!',
  description = 'A weekend-long workshop-oriented hackathon for any and all beginners in the world!',
  image = 'https://angelhacks.org/static/banner-inverted.png',
  url = 'https://angelhacks.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AngelHacks" />
    <meta name="twitter:site" content="@angelhacks_la" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'angelhacks',
          url: 'https://angelhacks.org',
          logo: 'https://angelhacks.org/logo_inverted.png',
          sameAs: [
            'https://twitter.com/angelhacks_la',
            'https://www.instagram.com/angelhacks.la',
            'https://www.facebook.com/angelhacks_la'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'hello@angelhacks.org',
              contactType: 'customer support',
              url: 'https://angelhacks.org'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'AngelHacks',
          startDate: '2020-12-18T5:00',
          endDate: '2019-12-20T21:00',
          description:
            'Register today for 12 hours of coding, fun, free food, and prizes. AngelHacks will be on October 26, 2019 and open to all middle and high school students.',
          isAccessibleForFree: true,
          url: 'https://angelhacks.org',
          image: 'https://angelhacks.org/static/logo-inverted.png',
          location: {
            '@type': 'Place',
            name: 'Snapchat Headquarters',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Los Angeles',
              addressRegion: 'CA',
              postalCode: '90291',
              streetAddress: '606 Venice Blvd., Venice 90291'
            }
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://angelhacks.com',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2020-05-01',
            validThrough: '2020-12-27'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'AngelHacks Core Team'
          }
        })
      }}
    />
  </Head>
)
