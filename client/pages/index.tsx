import Head from "next/head";
import styles from "@/styles/Home.module.css";
import EntryCard from "@/components/EntryCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jots</title>
        <meta name="description" content="A simple diary app" />
      </Head>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h1 className={styles.title}>Jot</h1>
          <nav>
            <ul className={styles.navList}>
              <li>Home</li>
              <li>Notes</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>
      <main className={styles.mainContent}>
        <EntryCard />
        Hello World
      </main>
    </div>
    </>
  );
}
