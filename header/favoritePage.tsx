import React from 'react'
import { Link } from 'gatsby'

import { getPage, Image } from '../utilities'

export const FavoritePage = ({ block, styles, pages }) => {
  return (
    <Link className={styles.link} to={block.page.replace('.forestry/content/pages', '').replace('.json', '')}>
      <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} />
      <strong>{getPage(block.page, pages) && getPage(block.page, pages).title}</strong>
    </Link>
  )
}
