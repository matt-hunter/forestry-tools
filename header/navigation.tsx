import React from 'react'
import { Link } from 'gatsby'

import { link, Page } from '../utilities'

export const Navigation = ({ block, styles }) => {
  return (
    <nav className={styles.navigation} role='navigation' aria-label='main navigation'>
      <ul className={styles.item + ' ' + styles.list}>
        {block.navigationItems.map((item, i) => {
          return (
            <li key={i} className={styles.item}>
              <Link activeClassName={styles.active} partiallyActive className={styles.link} to={link(item.replace('.json', ''))}>
                <span className={styles.title}>
                  <Page target={item} />
                </span>
                <span className={styles.bullet}>&#8226;</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
