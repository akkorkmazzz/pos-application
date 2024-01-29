import React from 'react'

import styles from './SearchBar.module.scss';
import { SeachIcon } from '../../utils/iconUtils';

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder="Search.." />
      <SeachIcon style={{marginLeft : "-30px", marginTop: "8px"}} />
    </div>
  )
}

export default SearchBar