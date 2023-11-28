import React from "react";
import style from "./Articles.module.css";
import accessibility from "../../../icons/accessibility.svg";
import freeAccess from "../../../icons/key.svg";
import downloads from "../../../icons/downloads.svg";
import limitations from "../../../icons/rotation_lock.svg";
import testimonial from "../../../icons/testimonial.svg";
import security from "../../../icons/security.svg";
import demo1 from "../../../icons/images/pinterest_video_downloader_1.jpeg";
import demo2 from "../../../icons/images/pinterest_video_downloader_2.jpeg";
import demo3 from "../../../icons/images/pinterest_video_downloader_3.jpeg";
import Image from "next/image";
import FAQs from "@/helmets/FAQHelmet";
import Accordion from "@/components/Accordion/Accordion";



function Articles() {
  return (
    <div className={style.parentBox}>
      <h2>How to download ?</h2>
      <div className={style.howToDownloadSection}>
        <div className={style.howToDownloadBox}>
          <Image className={style.image} src={demo1} alt="pinterest video downloader mobile view screen" priority/>
          <p>Step 1</p>
        </div>
        <div className={style.howToDownloadBox}>
          <Image className={style.image} src={demo2} alt="pinterest video downloader mobile view screen" priority/>
          <p>Step 2</p>
        </div>
        <div className={style.howToDownloadBox}>
          <Image className={style.image} src={demo3} alt="pinterest video downloader mobile view screen" priority/>
          <p>Step 3</p>
        </div>
      </div>
      <h2>Pinterest Downloader Features</h2>
      <p>
        Pinterest Downloader isn't just limited to videos; it's a versatile tool
        that allows users to download images and videos effortlessly. Supporting
        high-definition formats like MP4 for videos and JPG for ideas, it
        provides a user-friendly interface that caters to all skill levels.
      </p>
      <h2>Why Pinterest Video Downloader?</h2>
      <p>
        The genesis of Pinterest Downloader lies in Pinterest's restrictions on
        video downloads. We recognised how frustrating it is for users when they
        are unable to save their favourite content; the tool emerged as a
        solution—a free and easy way to download Pinterest videos for everyone
        on any device. Just follow those easy steps:
      </p>
     
      <h2>How to Download Pinterest Videos and Images</h2>
      <section className={style.section}>
        <p className={style.text}>
          Pinterest Downloader is easy-to-use for you. You can easily download
          videos from Pinterest without any limitations. Also, you do not need
          any registration or to pay a fee for the download. This tool is
          completely free. Follow the simple steps below to download Pinterest
          videos online.
        </p>
        <ol>
          <li>Open the Pinterest app and select the desired video or image.</li>
          <li>
            Tap on the <em>•••</em> icon (top right or bottom right, depending
            on your app version).
          </li>
          <li>Copy the link to the content.</li>
          <li>
            Paste the link into the Download Input Box on Pinterest Downloader.
          </li>
          <li>Tap the Download button.</li>
          <li>Preview your file and hit the Download button again.</li>
        </ol>
      </section>
      <h2>Benefits of Using Pinterest Downloader</h2>
      <section className={style.sectionBenifits}>
        <p>The advantages extend beyond mere convenience:</p>
        <h4 className={style.benifitsHeading}><Image  height={20} width={20} src={freeAccess} priority alt="free_access"/>Free Access</h4>
        <p>
          Pinterest Downloader ensures you can access your favourite content
          without spending a dime.
        </p>
        <h4 className={style.benifitsHeading}><Image  height={20} width={20} src={accessibility} alt="free_access"/>Offline Accessibility</h4>
        <p>Downloaded content can be enjoyed offline, anytime, anywhere.</p>
        <h4 className={style.benifitsHeading}><Image  height={20} width={20} src={downloads} priority alt="free_access"/>High-Definition Downloads</h4>
        <p>
          Experience the brilliance of Pinterest content in HD, enhancing visual
          quality.
        </p>
        <h4 className={style.benifitsHeading}><Image  height={20} width={20} src={limitations} priority alt="free_access"/>Overcoming Pinterest Limitations</h4>
        <p>
          Unlimited Pinterest content, including videos, GIFs, and images, can
          now be downloaded directly from our website with no restrictions.
        </p>
        <h4  className={style.benifitsHeading}><Image  height={20} width={20} src={testimonial} priority alt="free_access"/>User Testimonials</h4>
        <p>
          Real users have attested to the positive impact of Pinterest
          Downloader. From hobbyists to professionals, the tool has become
          integral to their Pinterest experience. Users praise its simplicity,
          efficiency, and the freedom it provides.
        </p>
        <h4 className={style.benifitsHeading}><Image  height={20} width={20} src={security} priority alt="free_access"/>Security and Privacy</h4>
        <p>
          Pinterest Downloader prioritises user security and privacy. Rest
          assured that your data remains confidential, and the tool operates
          with the utmost integrity, ensuring a secure downloading environment.
        </p>
      </section>
      <FAQs/>
      <section className={style.sectionFaq}>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <Accordion title="1. Is Pinterest Downloader safe to use?">
          <p>
            Pinterest Downloader prioritises user safety and employs security
            measures to protect your data.
          </p>
        </Accordion>
        <Accordion title="2. What formats are supported for video downloads?">
          <p>
            Pinterest Downloader supports MP4 format for high-definition video
            downloads.
          </p>
        </Accordion>
        <Accordion title="3. Do I need to register or pay to use Pinterest Downloader?">
          <p>No, the tool is free, and no registration or fees are required.</p>
        </Accordion>
        <Accordion title="4. Can I download content on mobile devices?">
          <p>
            Pinterest Downloader is compatible with computers, tablets, and
            mobile devices.
          </p>
        </Accordion>
      </section>
    </div>
  );
}

export default Articles;
