import React from "react";
import style from "./PrivacyPolicy.module.css";
import Layout from "@/components/Layout/Layout";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className={style.parent}>
        <h1>Privacy Policy</h1>

        <p>
          Pinterest Downloader prioritize the privacy and confidentiality of our
          users' information. This Privacy Policy outlines how we collect, use,
          and safeguard the personal information you provide while using our
          website.
        </p>

        <h2>Information Collection and Use:</h2>
        <p>
          We may collect personal information, such as your name, email address,
          or any other details you voluntarily provide when using our website.
          This information is used solely to enhance your experience and provide
          the services you request. We do not sell, share, or rent this
          information to third parties without your explicit consent.
        </p>

        <h2>Cookies and Tracking:</h2>
        <p>
          We use cookies and similar tracking technologies to enhance user
          experience and analyze trends on our website. These technologies may
          collect information like IP addresses, browser type, pages visited,
          and other usage data. Users can control cookie preferences through
          their browser settings.
        </p>

        <h2>Data Security:</h2>
        <p>
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
          However, please note that no method of transmission over the internet
          or electronic storage is entirely secure. While we strive to protect
          your data, we cannot guarantee absolute security.
        </p>

        <h2>Third-Party Links:</h2>
        <p>
          Our website may contain links to third-party sites or services that
          are not operated by us. We have no control over the content or
          practices of these sites and are not responsible for their privacy
          policies. We encourage users to review the privacy policies of any
          third-party sites they visit.
        </p>

        <h2>Changes to Privacy Policy:</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page, and users are encouraged to
          review this policy periodically for updates.
        </p>

        <p>
          By using our website, you agree to the terms outlined in this Privacy
          Policy. If you have any questions or concerns about our privacy
          practices, please contact us at{" "}
          <span>PinterestDownloader@outlook.com</span>.
        </p>

        <p>This Privacy Policy was last updated on 24-11-2023.</p>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
