import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ CONFIRMED: This matches your verified domain
  const baseUrl = 'https://www.redvanda.vc'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Home is always #1
    },
    {
      url: `${baseUrl}/thesis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // High priority: This is your core value proposition
    },
    {
      url: `${baseUrl}/pitch`, // The "Pitch Us" page
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9, // High priority: This is your conversion goal
    },
    {
      url: `${baseUrl}/portfolio`, // ✅ ADDED (Was missing)
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`, // ✅ ADDED (Was missing)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Tells Google to check here often for new content
      priority: 0.6,
    },
  ];
}