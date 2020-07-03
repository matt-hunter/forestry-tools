import React from 'react'
import camelcase from 'camelcase'

import styles from './button.module.scss'

export const Button = ({ style, text }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles[camelcase(style)]}>
        {text}
      </button>
    </div>
  )
}
