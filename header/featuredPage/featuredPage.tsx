import React from 'react'
import { Link } from 'gatsby'

import { getPage } from '../../utilities'

import styles from './featuredPage.module.scss'

export const FeaturedPage = ({ block, pages }) => {
  return (
    <Link className={styles.featured} to={block.page.replace('.forestry/content/pages', '').replace('.json', '')}>
      {getPage(block.page, pages) && getPage(block.page, pages).title}
    </Link>
  )
}
