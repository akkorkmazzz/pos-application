import React from 'react';

import styles from './FilterBar.module.scss';
import { filterBarDatas } from '../../mock/Datas.js';

const FilterBar = () => {

    return (
        <div className={styles.filterBarContainer}>
            {
                filterBarDatas.map((value) => {
                    return(
                        <div className={styles.boxContainer} key={value.id}>
                            <span>
                                {value.name}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FilterBar;