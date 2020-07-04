import React from 'react'

import { Image } from '../utilities'

export const Search = ({ block, styles }) => (
  <div className={styles.search}>
    <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} />
  </div>
)
