import {BASE_URL} from "@/constants";
import {IListDetail} from "@/types";
import styles from "@/styles/list.module.css";
import BookList from "@/app/components/book-list";

async function getList(listName: string) {
  const response = await fetch(`${BASE_URL}/list?name=${listName}`);
  return await response.json();
}

export default async function ListPage({params}: {params: Promise<{id: string}>}) {
  const id = (await params).id;
  const data: IListDetail = await getList(id);
  const listTitle = data.results.list_name;
  const books = data.results.books;

  return (
    <div className={styles.container}>
      <div className={styles.listTitleSection}>
        <h2 className={styles.listTitle}>{listTitle}</h2>
      </div>
      <BookList books={books} />
    </div>
  );
}