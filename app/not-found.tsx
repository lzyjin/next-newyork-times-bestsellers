import Link from 'next/link';
import styles from "@/styles/error.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="hover-el">Return Home</Link>
    </div>
  )
}