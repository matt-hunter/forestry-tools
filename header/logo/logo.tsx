import React from 'react'
import { Link } from 'gatsby'

import { Image } from '../../utilities'

import styles from './logo.module.scss'

export const Logo = ({ block }) => (
  <Link to='/'>
    <Image className={styles.logo} src={block.image} alt={block.alt} title={block.title} />
  </Link>
)
