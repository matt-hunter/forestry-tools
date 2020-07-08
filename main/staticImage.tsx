import React from 'react'

import { classNames, Image } from '../exports'

export const StaticImage = ({ block, styles, images }) => {
  return (
    <section className={classNames(block, styles)}>
      <Image images={images} className={styles.image} container='div' src={block.image.image} title={block.image.title} alt={block.image.alt}>
        <p className={styles.text}>{block.text}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Find out more
          </button>
        </div>
      </Image>
    </section>
  )
}
