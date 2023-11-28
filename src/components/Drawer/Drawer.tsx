// components/Drawer.tsx
import React, { FC, ReactNode } from 'react';
import styles from './Drawer.module.css';
import Hamburger from 'hamburger-react';
import Link from 'next/link';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isImage:boolean;
  handleIsImage:()=>void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose,isImage,handleIsImage }) => {
  return (
    <>
      {isOpen && <div className={`${isOpen ? styles.backdropColor : ''} ${styles.backdrop} `} onClick={onClose} />}
      <div className={`${isOpen ? styles.open : ''} ${styles.drawer} `} onClick={onClose}>
       <div className={styles.icon}><Hamburger toggled={isOpen} onToggle={onClose}/></div>
       <Link
          onClick={handleIsImage}
          className={styles.link}
          href={isImage ? "/" : "/pinterest-image-downloader"}
          replace
        >
          {isImage
            ? "Pinterest Videos Downloader"
            : "Pinterest Images Downloader"}
        </Link>
        <Link className={styles.link} href={"/about"} children={"About"} />
        <Link
          className={styles.link}
          href={"/contact-us"}
          children={"Contact Us"}
        />

      </div>
    </>
  );
};

export default Drawer;
