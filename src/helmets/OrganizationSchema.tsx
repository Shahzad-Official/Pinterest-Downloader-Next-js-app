import React from "react";
import { Helmet } from "react-helmet";

function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "Pinterest Downloader",
          url: "https://pinterest-downloader.org/",
          logo: "https://pinterest-downloader.org/pinterest-downloader-logo.png",
          description: "Pinterest Downloader provides tools to download images, videos, and content from Pinterest.",
        })}
      </script>
    </Helmet>
  );
}

export default OrganizationSchema;
