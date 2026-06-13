import { MetadataRoute } from 'next'

const BASE_URL = 'https://sbacchus.com'

export default function robots(): MetadataRoute.Robots {
  return {
    // Allows any search engine crawler access to any page on the site
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}