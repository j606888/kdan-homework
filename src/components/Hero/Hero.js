import React, { useState } from 'react'
import styles from './Hero.module.css' 

const Hero = (props) => {
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit(term)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input className={styles.search} type="text" placeholder="Date, locality or rocket" onChange={(e) => { setTerm(e.target.value)}}/>
      </form>
    </div>
  )
}

export default Hero
