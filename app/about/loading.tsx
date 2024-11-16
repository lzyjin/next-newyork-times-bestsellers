import IconLoading from "@/icons/icon-loading.svg";
import styles from "@/styles/loading.module.css"

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <IconLoading />
    </div>
  );
}