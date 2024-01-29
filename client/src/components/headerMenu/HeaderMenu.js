import React from 'react';
import { menuDatas } from '../../mock/Datas.js';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {

    

    const menuItem = (icon, title, index) => {
        return (
            <div className={styles.menuItem} key={index} >
                <div>{icon}</div>
                <div><span>{title}</span></div>
                <div className={styles.line} />
            </div>
        )
    }

    return (
        <div className={styles.headerMenuContainer}>
            {menuDatas.map((value, index) => {
                return(
                    menuItem(value.icon, value.title, index)
                )
            })}
            
        </div>
    )
}

export default HeaderMenu