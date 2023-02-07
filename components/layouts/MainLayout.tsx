import Head from "next/head";
import { Navbar } from "../Navbar";

import { Layout } from "./types";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }: Layout) => {
  return (
    <>
      <Head>
        <title>Home CSS</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
