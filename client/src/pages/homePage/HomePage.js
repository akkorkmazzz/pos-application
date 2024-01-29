import React from 'react';
import FilterBar from '../../components/filterBar/FilterBar';
import Products from '../../components/products/Products';
import BasketBar from '../../components/basketBar/BasketBar';

import styles from './HomePage.module.scss';

const HomePage = () => {

    return (
        <div className={styles.homePageContainer}>
            <FilterBar />
            <Products />
            <BasketBar />
        </div>
    )
}

export default HomePage