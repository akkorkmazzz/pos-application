import React, { useState } from 'react';
import CustomTable from '../../components/table/CustomTable';

import styles from './CardPage.module.scss';
import CustomButton from '../../components/button/CustomButton';
import CustomModal from '../../components/customModal/CustomModal';

const CartPage = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

     const onClickOrderButton = () => {
        console.log("aa");
        setIsOpenModal(true);
    }

    return (
        <>
            <div className={styles.cartPageContainer}>
                <CustomTable />
                <div className={styles.orderCardContainer}>
                    <div className={styles.orderCardMainContainer}>
                        <div>
                            <h4>Ara Toplam</h4>
                            <h4>549.00&#8378;</h4>
                        </div>
                        <div>
                            <h4>KDV Toplam %8</h4>
                            <h4 className={styles.kdvText}>+43.92&#8378;</h4>
                        </div>
                        <div style={{margin: "10px 0px"}}>
                            <h3>Toplam</h3>
                            <h3>592.92&#8378;</h3>
                        </div>
                        <CustomButton onClick={onClickOrderButton} title={"Şipariş Oluştur"} backgroundColor={"#8DA47E"} color={"#FBF9F1"} />
                    </div>
                </div>
            </div>
            <CustomModal 
                open={isOpenModal} 
                setOpen={setIsOpenModal} 
                title={"Fatura Oluştur"}
                content={
                    <div>
                        a
                    </div>
                }
            />
        </>
    )
}

export default CartPage;