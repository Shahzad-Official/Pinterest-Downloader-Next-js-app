import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pinterest-downloader.org/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://pinterest-downloader.org/pinterest-image-downloader",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://pinterest-downloader.org/about",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://pinterest-downloader.org/privacy-policy",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://pinterest-downloader.org/contact-us",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
