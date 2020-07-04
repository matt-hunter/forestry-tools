import React from 'react'
import { Link } from 'gatsby'

import { Image } from '../utilities'

export const Logo = ({ block, styles }) => (
  <Link to='/'>
    <Image className={styles.logo} src={block.image} alt={block.alt} title={block.title} />
  </Link>
)
