import React from 'react';

import styles from './ProductBox.module.scss';

const ProductBox = () => {
    return (
        <div className={styles.productBoxContainer}>
            <img src={require('../../img/lahmacun.jpg')} alt="" />
            <div>
                <h4>Lahmacun</h4>
                <h5>12&#8378;</h5>
            </div>
        </div>
    )
}

export default ProductBox