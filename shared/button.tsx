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
  const page = link && pages.length && pages.find(page => link.includes(page.relativePath))

  const Icon = () => {
    return direction === 'right' ? (
      <img className={styles.arrow} src={rightArrow} alt='right arrow' />
    ) : (
      <img className={styles.arrow} src={downArrow} alt='down arrow' />
    )
  }
  return (
    <div className={styles.buttonContainer}>
      {page ? (
        <Link to={page.filePath} className={styles.button}>
          <Icon />
          <p className={styles.label}>{text}</p>
        </Link>
      ) : (
        <button onClick={onClick} className={styles.button}>
          <Icon />
          <p className={styles.label}>{text}</p>
        </button>
      )}
    </div>
  )
}
