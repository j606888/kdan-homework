import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <i className="fas fa-rocket"></i>
        <h2>Space Traval</h2>
      </div>
      <button className={styles.btn} >Log in</button>
    </div>
  )
}

export default Header
