import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://celaris.tech';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}