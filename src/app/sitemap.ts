import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.sbacchus.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(), // Automatically gets new date upon fresh build

    },

    /* If in the future we expand to new pages, we can add them like this:
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    */
  ]
}