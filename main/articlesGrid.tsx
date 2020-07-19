import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { classNames, Image } from '../exports'

export const ArticlesGrid = ({ block, styles, images, articles, pages }) => {
  const [filter, setFilter] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    const tags = []
    articles.forEach(article => article.frontmatter.tags.forEach(tag => tags.push(tag.toLowerCase())))
    tags.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
    setTags(['all', ...new Set(tags)])
  }, [articles])

  const getPage = filePath => pages.find(page => filePath.includes(page.relativePath))

  return (
    <section className={classNames(block, styles)}>
      <div className={styles.categoriesContainer}>
        <h1 className={styles.label}>Categories</h1>
        <div className={styles.categories}>
          {tags.map((tag, i) => {
            const applyFilter = () => {
              if (tag === 'all' || tag === filter) return setFilter('')
              setFilter(tag)
            }
            return (
              <button key={i} className={styles.category + `${tag === 'all' && !filter ? ` ${styles.active}` : filter === tag ? ` ${styles.active}` : ''}`} onClick={applyFilter}>{tag}</button>
            )
          })}
        </div>
      </div>
      <div className={styles.articles}>
        {articles.filter(article => !filter ? article : article.frontmatter.tags.find(tag => tag.toLowerCase() === filter)).map((article, i) => {
          const page = getPage(article.frontmatter.parent)
          return (
            <div key={i} className={styles.article}>
              <Link className={styles.imageLink} to={page.filePath + '/' + article.fields.slug}>
                <Image images={images} className={styles.image} src={article.frontmatter.heroImage.relativePath} container='div' />
              </Link>
              <Link className={styles.titleLink} to={page.filePath + '/' + article.fields.slug}>
                <h2 className={styles.title}>{article.frontmatter.title}</h2>
              </Link>
              <Link className={styles.buttonLink} to={page.filePath + '/' + article.fields.slug}>
                <p className={styles.button}>Read Full Story →</p>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
