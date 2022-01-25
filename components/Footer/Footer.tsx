import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_border}>
      <div className={styles.footer}>
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li className={styles.footer_text}>Home</li>
            <li className={styles.footer_text}>Blog</li>
            <li className={styles.footer_text}>About</li>
          </ul>
        </div>
        <div className="flex items-center my-4 lg:my-0"></div>
        <div className="flex justify-center mt-4 lg:mt-0">
          <a href="https://www.facebook.com/lars.assen.9/">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-main"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/LarsAssen" className="ml-3">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-main"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/larsassen/" className="ml-3">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-main"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
