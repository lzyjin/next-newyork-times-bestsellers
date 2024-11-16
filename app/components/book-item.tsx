"use client";

import styles from "@/styles/list.module.css";
import Link from "next/link";
import Image from "next/image";
import {IBook} from "@/types";
import {useState} from "react";

export default function BookItem({book}: {book: IBook}) {
  const [isLinkBoxVisible, setIsLinkBoxVisible] = useState(false);
  const toggleLinkBox = () => setIsLinkBoxVisible(curr => !curr);

  return (
    <div className={styles.book}>
      <Link href={book.amazon_product_url} target="_blank">
        <div className={styles.bookImg}>
          <Image src={book.book_image} alt={book.title} width={book.book_image_width} height={book.book_image_height}/>
        </div>
      </Link>
      <div>
        <p className={styles.bookRank}>
          {book.rank === 1 ? "🥇 " : ""}
          {book.rank === 2 ? "🥈 " : ""}
          {book.rank === 3 ? "🥉 " : ""}
          {String(book.rank).padStart(2, "0")}
        </p>
        <p className={styles.bookTitle}>{book.title}</p>
        <p className={styles.bookAuthor}>🖋️ <span>{book.author}</span></p>
        <p>🏢 {book.publisher}</p>
        <p className={styles.bookDescription}>{book.description}</p>
        <div className={styles.buySection}>
          <button className={styles.btnBuy} onClick={toggleLinkBox}>BUY</button>
          {
            isLinkBoxVisible && (
              <div className={styles.buyLinkBox}>
                <ul>
                  {
                    book.buy_links.map(link => (
                      <li key={link.name}>
                        <Link href={link.url} target="_blank">{link.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          }
        </div>
        {/*<p>rank_last_week: {book.rank_last_week}</p>*/}
      </div>
    </div>
  );
}