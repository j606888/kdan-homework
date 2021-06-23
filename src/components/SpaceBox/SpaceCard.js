import React from 'react'
import styles from './SpaceCard.module.css'
import defaultLogo from './space_x_icon.png'

const SpaceCard = (props) => {
  const { name, rocket, date, launchpad, locality, image_url} = props.event
  
  return (
    <div className={styles.card}>
      <div className={styles.face}>
        <img src={image_url || defaultLogo} alt="event" />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>Rocket: {rocket}</p>
        <p>Date: {date}</p>
        <p>Launchpad: {launchpad}</p>
        <p>Locality: {locality}</p>
      </div>
      <div className={styles.detail}>Details</div>
    </div>
  )
}

export default SpaceCard
