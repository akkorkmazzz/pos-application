import React from 'react';

import styles from './CustomTable.module.scss';

const CustomTable = () => {

    const data = [
        {
            title: "Name",
            column: ["Mike", "John"]
        },
        {
            title: "Age",
            column: ["32", "42"]
        },
        {
            title: "Address",
            column: ["10 Downing Street", "10 Downing Street"]
        }
    ]

    return (
        <div className={styles.tableContainer}>
            {
                data.map((value, index) => (
                    <div key={index} className={styles.columnContainer}>
                        <div className={styles.titleContainer}>
                            <h3>{value.title}</h3>
                        </div>
                        {value.column.map((val, idx) => (
                            <div key={idx} className={styles.contentContainer}>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                    
                ))
            }
        </div>
    )
}

export default CustomTable;