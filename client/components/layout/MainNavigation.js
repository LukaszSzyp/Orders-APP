import React from "react";
import styles from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>HA SOLUTIONS</div>
      <ul>
        <li>
          <Link href="/" className={styles.link}>
            <a>Strona domowa</a>
          </Link>
        </li>
        <li>
          <Link href="/assortment">
            <a>Asortymenty</a>
          </Link>
        </li>
        <li>
          <Link href="/technologies">
            <a>Technologie</a>
          </Link>
        </li>
        <li>
          <Link href="/contractors">
            <a>Kontrachenci</a>
          </Link>
        </li>
        <li>
          <Link href="/offers">
            <a>Oferty</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
