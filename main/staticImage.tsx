import React from 'react'

import { classNames, Image } from '../exports'
import { Button } from '../shared'

export const StaticImage = ({ block, styles, images, pages }) => {
  console.log(block)
  return (
    <section className={classNames(block, styles)}>
      <Image images={images} className={styles.image} container='div' src={block.image.image} title={block.image.title} alt={block.image.alt}>
        <p className={styles.text}>{block.text}</p>
        <Button text='Find out more' direction='right' styles={styles} pages={pages} link={block.button.link} />
      </Image>
    </section>
  )
}
