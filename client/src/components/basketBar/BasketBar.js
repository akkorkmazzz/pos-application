import React from 'react'

import styles from './BasketBar.module.scss';
import CustomButton from '../button/CustomButton';
import BasketCard from '../basketCard/BasketCard';

const BasketBar = () => {
    return (
        <div className={styles.basketBarContainer}>
            <div className={styles.titleContainer}>
                <h3>Sepetteki Ürünler</h3>
            </div>
            <div className={styles.mainContentContainer}>
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
            </div>
            <div className={styles.footerSection}>
                <div className={styles.subTotalContainer}>
                    <span className={styles.title}>Ara Toplam</span>
                    <span>75</span>
                </div>
                <div className={styles.kdvContainer}>
                    <span className={styles.title}>KDV %8</span>
                    <span className={styles.kdvPrice}>75</span>
                </div>
                <div className={styles.grandTotalContainer}>
                    <span className={styles.title}>Genel Toplam</span>
                    <span className={styles.price}>81</span>
                </div>
                <div className={styles.createOrderButtonCont}>
                    <CustomButton title={"Şipariş Oluştur"} backgroundColor={"#8DA47E"} color={"#FBF9F1"} />
                </div>
                <div className={styles.cleanButtonCont}>
                    <CustomButton title={"Temizle"} backgroundColor={"#ff6961"} color={"#FBF9F1"} />
                </div>
            </div>
        </div>
    )
}

export default BasketBar;