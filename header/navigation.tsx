import React from 'react'
import { Link } from 'gatsby'

import { link } from '../utilities'

export const Navigation = ({ block, styles, pages }) => {
  const getPage = target => pages.find(page => page.slug === target.replace('.forestry/content/pages/', '').replace('.json', ''))

  return (
    <nav className={styles.navigation} role='navigation' aria-label='main navigation'>
      <ul className={styles.item + ' ' + styles.list}>
        {block.navigationItems.map((item, i) => {
          return getPage(item) && getPage(item).title && (
            <li key={i} className={styles.item}>
              <Link activeClassName={styles.active} partiallyActive className={styles.link} to={link(item.replace('.json', ''))}>
                <span className={styles.title}>{getPage(item).title}</span>
                <span className={styles.bullet}>&#8226;</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
