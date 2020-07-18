import React from 'react'
import { Link } from 'gatsby'

export const Navigation = ({ block, styles, pages, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false)
  const getPage = filePath => {
    const page = pages.find(page => filePath.includes(page.relativePath))
    return page && page.filePath ? (
      <Link activeClassName={styles.active} className={styles.link} partiallyActive={page.filePath !== '/'} to={page.filePath} onClick={closeMenu}>
        <p>{page.title}</p>
      </Link>
    ) : 'Link Missing'
  }

  return (
    <nav className={styles.default} role='navigation' aria-label='main navigation'>
      <ul className={styles.item + ' ' + styles.list}>
        {block.navigationItems.map((item, i) => (
          <React.Fragment key={i}>
            {getPage(item)}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}
