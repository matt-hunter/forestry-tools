import React from 'react'
import { Link } from 'gatsby'

import { enabled } from '../exports'

export const CopyrightInfo = ({ block, styles, pages }) => {
  const getPage = filePath => {
    const page = pages.find(page => filePath.includes(page.relativePath))
    return page && page.filePath ? (
      <Link className={styles.link} to={page.filePath}>{page.title}</Link>
    ) : 'Link Missing'
  }
  return (
    <section className={styles.default}>
      {enabled(block.blocks).map((block, i) => {
        return block.template === 'copyright-info-link' ? (
          <p key={i} className={styles.paragraph}>{getPage(block.page)}</p>
        ) : block.template === 'copyright-info-text' ? (
          <p key={i} className={styles.paragraph}>Text</p>
        ) : null
      })}
    </section>
  )
}
