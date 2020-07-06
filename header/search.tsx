import React from 'react'

import { Image } from '../exports'

export const Search = ({ block, styles, images }) => (
  <div className={styles.search}>
    {block.icon && <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} images={images} />}
  </div>
)
