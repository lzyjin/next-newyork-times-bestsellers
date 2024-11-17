import styles from "@/styles/footer.module.css";
import Link from "next/link";
import IconGithub from "@/icons/icon-github.svg";
import IconNomadcoders from "@/icons/icon-nomadcoders.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>created by Kim Yejin</p>
      <Link href="https://www.nytimes.com/books/best-sellers" className={`${styles.nytimes} hover-el`}>The New York Times</Link>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="https://github.com/lzyjin/next-newyork-times-bestsellers" target="_blank">
              <IconGithub />
            </Link>
          </li>
           <li className={styles.link}>
            <Link href="https://nomadcoders.co/nextjs-for-beginners" target="_blank">
              <IconNomadcoders />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}