import React from 'react'
import { Link } from 'gatsby'

import { Page } from '../utilities'

export const FeaturedPage = ({ block, styles }) => {
  return (
    <Link className={styles.featured} to={block.page.replace('.forestry/content/pages', '').replace('.json', '')}>
      <Page target={block.page} />
    </Link>
  )
}
