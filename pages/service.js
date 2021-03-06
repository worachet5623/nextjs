import React from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function service() {
    return (
        <div className={styles.container}>
        <Head>
          <title>worachet | Service</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to service!</h1>
  
          <p className={styles.description}>Get started </p>
        </main>
      </div>
    )
}
