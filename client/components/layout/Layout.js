import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HA SOLUTIONS</title>
        <meta
          name="HA SOLUTIONS assortment"
          content="App for create assortment and orders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
