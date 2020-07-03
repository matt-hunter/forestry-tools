import React from 'react'

import { Image } from '../../utilities'

import styles from './search.module.scss'

export const Search = ({ block, images }) => (
  <div className={styles.search}>
    <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} images={images} />
  </div>
)
