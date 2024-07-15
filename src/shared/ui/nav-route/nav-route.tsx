import React, { FC } from 'react'
import { INavRoute } from "./nav-route.interface"
import styles from "./nav-route.module.scss"

export const NavRoute: FC<INavRoute> = ({ title }) => {
  return (
    <button className={styles.button_container}>
        <p className={styles.text}>{title}</p>
        <div className={styles.line}></div>
    </button>
  )
}
