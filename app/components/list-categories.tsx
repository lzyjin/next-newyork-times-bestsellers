"use client";

import styles from "@/styles/home.module.css";
import Link from "next/link";
import {encodingListName} from "@/utils";
import {IList} from "@/types";
import {useEffect, useState} from "react";

export default function ListCategories({lists}: {lists: IList[]}) {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<IList[]>(lists);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    const result = lists.filter(item => item.list_name.toLowerCase().includes(keyword.toLowerCase()));
    setSearchResult(result);
  }, [keyword, lists]);

  return (
    <div>
      <div className={styles.info}>
        <p className={styles.total}>Total: {lists.length} Lists { keyword.trim() !== "" && ` / Search Result: ${searchResult.length} Lists` }</p>
        <input type="text" value={keyword} onChange={onChange} placeholder="Search by list name 🔍 " className={styles.input} />
      </div>
      <div className={styles.wrapper}>
        {
          searchResult.map(list => (
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