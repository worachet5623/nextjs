import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>worachet | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to about!</h1>

        <p className={styles.description}>Get started </p>
      </main>
    </div>
  );
}
