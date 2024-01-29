import React, { useState } from 'react';

import styles from './BasketCard.module.scss';
import { MinusIcon, PlusIcon } from '../../utils/iconUtils';

const BasketCard = () => {

    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if(count > 1){
            setCount(count - 1);
        } 
    }

    return (
        <div className={styles.basketCardContainer}>
            <div className={styles.leftContainer}>
                <img src={require('../../img/lahmacun.jpg')} alt="" />
                <div className={styles.cardInformationContainer}>
                    <h3>Elma</h3>
                    <h4>12&#8378; x {count}</h4>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <button className={styles.buttonContainer} onClick={increaseCount} style={{marginRight: "6px"}}><PlusIcon /></button>
                {count}
                <button className={styles.buttonContainer} onClick={decreaseCount}  style={{marginLeft: "6px"}}><MinusIcon /></button>
            </div>
        </div>
    )
}

export default BasketCard