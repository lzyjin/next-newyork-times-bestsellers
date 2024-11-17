import {BASE_URL} from "@/constants";
import {ILists} from "@/types";
import styles from "@/styles/home.module.css";
import ListCategories from "@/app/components/list-categories";

async function getLists() {
  const response = await fetch(`${BASE_URL}/lists`);
  return await response.json();
}

export default async function HomePage() {
  const data: ILists = await getLists();
  const lists = data.results;

  return (
    <div className={styles.container}>
      <ListCategories lists={lists} />
    </div>
  );
}
