import React from 'react'

import styles from './Header.module.scss';
import SearchBar from '../searchBar/SearchBar';
import HeaderMenu from '../headerMenu/HeaderMenu';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <span>POS-A</span>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <HeaderMenu />
      </div>
    </div>
  )
}

export default Header