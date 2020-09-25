/*
 * @Author: your name
 * @Date: 2020-09-23 20:10:55
 * @LastEditTime: 2020-09-24 20:26:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \afzhipin-client\src\components\logo\logo.js
 */
import React from 'react';

import logo from './logo.jpg';
import styles from './logo.less';

export default function Logo() {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo'/>
        </div>
    )
}
