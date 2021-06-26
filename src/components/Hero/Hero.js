import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css' 

const Hero = (props) => {
  const [term, setTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onSubmit(term.toLowerCase())
    }, 400)

    return () => clearTimeout(timer)
  }, [term, props])

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        placeholder="Date, locality or rocket"
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  )
}

export default Hero
