import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.from}>© 2021 Space Travel Ltd.</div>
      <div className={styles.icons}>
        <select className={styles.select} name="" id="">
          <option value="">簡體中文</option>
          <option value="">繁體中文</option>
          <option value="">English</option>
        </select>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  )
}

export default Footer
