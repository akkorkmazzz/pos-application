import React from 'react';

import styles from './CustomButton.module.scss';

const CustomButton = ({ title, backgroundColor, color, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundColor: backgroundColor, color: color }} className={styles.buttonContainer}>
            <span>{title}</span>
        </button>
    )
}

export default CustomButton;