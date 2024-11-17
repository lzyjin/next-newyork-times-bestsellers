import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/"} className="hover-el">Home</Link>
          </li>
          <li>
            <Link href={"/about"} className="hover-el">About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.headline}>The New York Times Best Seller Explorer</h1>
    </header>
  );
}