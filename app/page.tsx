import styles from "./page.module.css";
import Principal from "./principal/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Principal />
      </main>
    </div>
  );
}
