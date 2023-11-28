

import React from 'react';
import { Helmet } from 'react-helmet';

const FAQs = () => {
  return (
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Pinterest Downloader safe to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinterest Downloader prioritises user safety and employs security measures to protect your data."
                }
              },
              {
                "@type": "Question",
                "name": "What formats are supported for video downloads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinterest Downloader supports MP4 format for high-definition video downloads."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to register or pay to use Pinterest Downloader?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, the tool is free, and no registration or fees are required."
                }
              },
              {
                "@type": "Question",
                "name": "Can I download content on mobile devices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinterest Downloader is compatible with computers, tablets, and mobile devices."
                }
              }
            ]
          })}
        </script>
      </Helmet>
  );
};

export default FAQs;
