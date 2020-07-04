import React from 'react'
import { Link } from 'gatsby'

import { Image, Page } from '../utilities'

export const FavoritePage = ({ block, styles }) => {
  return (
    <Link className={styles.link} to={block.page.replace('.forestry/content/pages', '').replace('.json', '')}>
      <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} />
      <strong><Page target={block.page} /></strong>
    </Link>
  )
}
