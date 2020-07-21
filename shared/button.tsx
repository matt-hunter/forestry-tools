import React from 'react'

import rightArrow from '../images/arrow-right-circle.svg'
import downArrow from '../images/arrow-down-circle.svg'

export const Button = ({ styles, text, direction, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClick} className={styles.button}>
        {direction === 'right' && (
          <img className={styles.arrow} src={rightArrow} alt='right arrow' />
        )}
        {direction === 'Down' && (
          <img className={styles.arrow} src={downArrow} alt='down arrow' />
        )}
        <p className={styles.label}>{text}</p>
      </button>
    </div>
  )
}
