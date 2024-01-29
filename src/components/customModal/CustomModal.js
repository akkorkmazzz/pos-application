import React from 'react';

import styles from './CustomModal.module.scss';
import { CloseIcon } from '../../utils/iconUtils';

const CustomModal = ({ open, setOpen, title, content}) => {

    return (
        <div className={`${styles.openCustomModalContainer} ${!open && styles.closeCustomModalContainer}`}>
            <div className={styles.mainContentContainer}>
                <div className={styles.titleCont}>
                    <h3>{title}</h3>
                    <div onClick={() => setOpen(false)}>
                        <CloseIcon style={{width: "24px", height: "24px"}} />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default CustomModal