"use client";

import styles from "@/styles/list.module.css";
import {IBook} from "@/types";
import BookItem from "@/app/components/book-item";
import IconListView from "@/icons/icon-list-view.svg";
import IconGridView from "@/icons/icon-grid-view.svg";
import {useState} from "react";
// import {useSSR} from "@/hooks/use-ssr";

export default function BookList({books}: {books: IBook[]}) {
  // 실패한 삽질 코드
  // const [isGridView, setIsGridView] = useSSR();
  const [isGridView, setIsGridView] = useState(true);

  const toggleViewMode = () => setIsGridView(p => !p);

  return (
    <section className={styles.listSection}>
      <button className={styles.btnToggleViewMode} onClick={toggleViewMode}>
        {
          isGridView ?
            <IconListView/> :
            <IconGridView/>
        }
      </button>

      <div>isGridView: {isGridView}</div>
      <div className={`${styles.wrapper} ${!isGridView && styles.listView}`}>
        {
          books.map(book => (
            <BookItem key={book.primary_isbn13} book={book}/>
          ))
        }
      </div>
    </section>
  );
}