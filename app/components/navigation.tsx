import Link from "next/link";
import styles from "@/styles/navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.headline}>The New York Times Best Seller Explorer</h1>
      {/*<button className={styles.modeControl}>다크모드로</button>*/}
    </header>
  );
}