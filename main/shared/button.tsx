import React from 'react'
import camelcase from 'camelcase'

export const Button = ({ style, styles, text }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles[camelcase(style)]}>
        {text}
      </button>
    </div>
  )
}
