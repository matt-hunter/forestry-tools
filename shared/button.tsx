import React from 'react'
import { Link } from 'gatsby'

import rightArrow from '../images/arrow-right-circle.svg'
import downArrow from '../images/arrow-down-circle.svg'

type buttonProps = {
  styles: any,
  text: string,
  direction: string,
  pages?: any,
  onClick?: any,
  link?: string
}

export const Button = ({ styles, text, direction, pages, onClick, link }: buttonProps) => {
  const getPage = filePath => pages.find(page => filePath.includes(page.relativePath))
  return (
    <div className={styles.buttonContainer}>
      {link ? (
        <Link to={getPage(link)} className={styles.button}>
          {direction === 'right' && (
            <img className={styles.arrow} src={rightArrow} alt='right arrow' />
          )}
          {direction === 'Down' && (
            <img className={styles.arrow} src={downArrow} alt='down arrow' />
          )}
          <p className={styles.label}>{text}</p>
        </Link>
      ) : (
        <button onClick={onClick || null} className={styles.button}>
          {direction === 'right' && (
            <img className={styles.arrow} src={rightArrow} alt='right arrow' />
          )}
          {direction === 'Down' && (
            <img className={styles.arrow} src={downArrow} alt='down arrow' />
          )}
          <p className={styles.label}>{text}</p>
        </button>
      )}
    </div>
  )
}
