import React from "react";
import styles from "./About.module.css";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

function About() {
  return (
    <Layout>
    <div className={styles.mainBox}>
      <div className={styles.parent}>
        <h1>About Us</h1>
        <p>
          <Link className={styles.link} href={"/"} replace>
            Pinterest downloader
          </Link>
          is passionate about making your online experience seamless. Our
          platform is designed to simplify the process of accessing Pinterest
          videos effortlessly. We believe in providing a user-friendly space
          where you can conveniently download your favorite Pinterest videos
          without hassle. Our commitment lies in offering a straightforward
          solution, ensuring that your interaction with our website remains
          intuitive and efficient.
        </p>
        <p>
          We prioritize accessibility and functionality, aiming to create a
          space where anyone can easily navigate and obtain the videos they
          desire. With a focus on user convenience, we've streamlined the
          process, allowing you to swiftly access and download Pinterest videos
          at your convenience. Our dedication to simplicity means that you can
          enjoy your browsing experience without unnecessary complexities,
          making video downloading a smooth and hassle-free task.
        </p>
        <span className="spacer" />
      </div>
    </div>
    </Layout>
  );
}

export default About;
