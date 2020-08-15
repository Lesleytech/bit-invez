import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <strong>
          <span>Bi</span>t<span> i</span>nvez
          <span>.</span>
        </strong>
        <nav>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/about'>About us</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/login'>Login</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/register'>Register</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
