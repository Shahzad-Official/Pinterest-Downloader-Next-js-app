import React, { useState } from "react";
import styles from "./Accordion.module.css";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header} onClick={handleToggle}>
        <h3 className={styles.title}>{title}</h3>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41602 9L12.0001 13.585L16.5841 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`${styles.contentBox} ${isOpen ? styles.open : ""}`}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
export default Accordion;
