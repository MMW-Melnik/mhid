import React, { useState } from 'react';
import styles from "./List.module.scss";
import Link from 'next/link';

const List = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleList} className={styles.button}>
        Etapus 1
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          <li className={styles.listItem}><Link href="/">Sofia</Link></li>
          <li className={styles.listItem}><Link href="/">Charlotta</Link></li>
          <li className={styles.listItem}><Link href="/">Andrii</Link></li>
          <li className={styles.listItem}><Link href="/">Felix</Link></li>
        </ul>
      )}
    </div>
  );
};

export default List;
