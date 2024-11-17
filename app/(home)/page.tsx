import {BASE_URL} from "@/constants";
import {ILists} from "@/types";
import Link from "next/link";
import {encodingListName} from "@/utils";
import styles from "@/styles/home.module.css";

async function getLists() {
  const response = await fetch(`${BASE_URL}/lists`);
  return await response.json();
}

export default async function HomePage() {
  const data: ILists = await getLists();
  const lists = data.results;

  return (
    <div className={styles.container}>
      <p className={styles.total}>Total {data.num_results} Lists</p>
      <div className={styles.wrapper}>
        {
          lists.map(list => (
            <div key={list.list_name} className={styles.item}>
              <Link href={`/list/${encodingListName(list.list_name)}`} prefetch={true}>
                <p className={styles.itemTitle}>{list.display_name}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
