import Image from "next/image";
import styles from "../../page.module.css";
import "../Custom/styledCustom.scss";
import Link from "next/link";

const FooterCustom = () => {
  return (
    <footer className={styles.footer}>
      <nav className="bottom-nav">
        <Link href="/" className="nav-btn active">
          <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
          </svg>
          <span>INICIO</span>
        </Link>

        <Link href="/mapTotal" className="nav-btn">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>MAPA</span>
        </Link>

        <Link href="/stats" className="nav-btn">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20v-6M6 20V10M18 20V4"></path>
          </svg>
          <span>STATS</span>
        </Link>

        <button className="nav-btn">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>HISTORIA</span>
        </button>
      </nav>
    </footer>
  );
};

export default FooterCustom;
