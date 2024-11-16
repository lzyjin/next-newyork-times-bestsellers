"use client";

import styles from "@/styles/list.module.css";
import BookItem from "@/app/components/book-item";
import {IBook} from "@/types";
import {useState} from "react";
import IconListView from "@/icons/icon-list-view.svg";
import IconGridView from "@/icons/icon-grid-view.svg";

export default function BookList({books}: {books: IBook[]}) {
  const [isListView, setIsListView] = useState(false);
  const toggleViewMode = () => setIsListView(p => !p);
  return (
    <section className={styles.listSection}>
      <button className={styles.btnToggleViewMode} onClick={toggleViewMode}>
        {
          isListView ?
          <IconGridView /> :
          <IconListView />
        }
      </button>

      <div className={`${styles.wrapper} ${isListView && styles.listView}`}>
        {
          books.map(book => (
            <BookItem key={book.primary_isbn13} book={book}/>
          ))
        }
      </div>
    </section>
  );
}