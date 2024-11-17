import styles from "@/styles/about.module.css";
import Link from "next/link";
import IconGithub from "@/icons/icon-github.svg";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>About</h2>
      <p className={styles.desc}>
        Welcome to the official for The New York Times Best Seller list explorer. <br/>
        We hope you enjoy your stay!
      </p>
      <br/>
      <p>
        This website is the graduation code challenge of &lt;NextJS 14 For Beginners&gt; of Nomad Coders.
      </p>
      <br/>
      <Link
        href="https://github.com/lzyjin/next-newyork-times-bestsellers"
        target="_blank"
        className={styles.link}>
        <span>Here&#39;s the source code</span>
        <IconGithub/>
      </Link>
    </div>
  );
}