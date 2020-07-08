import React from 'react'

import { Image } from '../exports'

export const Logo = ({ block, styles, images }) => {
  return (
    <section className={styles.default}>
      <Image images={images} className={styles.image} src={block.image} title={block.title} alt={block.alt} />
    </section>
  )
}
