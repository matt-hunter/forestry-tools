import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'

import { classNames, Image } from '../exports'

import arrow from '../images/arrow-right.svg'

export const ArticlesGrid = ({ block, styles, images, articles, pages, tag }) => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const tags = []
    articles.forEach(article => article.frontmatter.tags.forEach(articleTag => tags.push(articleTag.toLowerCase())))
    tags.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
    setTags(['all', ...new Set(tags)])
  }, [articles])

  const getPage = filePath => pages.find(page => filePath.includes(page.relativePath))

  const applySelect = e => {
    if (e.target.value === 'all') {
      navigate('?tag=')
    } else {
      navigate(`?tag=${e.target.value}`)
    }
  }

  return (
    <section className={classNames(block, styles)}>
      <div className={styles.categoriesContainer}>
        <h1 className={styles.label}>Categories</h1>
        <div className={styles.categories}>
          {tags.map((selected, i) => {
            const applyFilter = () => {
              if (selected === 'all' || selected === tag) {
                navigate('?tag=')
              } else {
                navigate(`?tag=${selected}`)
              }
            }
            return (
              <button key={i} className={styles.category + `${selected === 'all' && !tag ? ` ${styles.active}` : selected === tag ? ` ${styles.active}` : ''}`} onClick={applyFilter}>{selected}</button>
            )
          })}
        </div>
        <select className={styles.categoriesList} onChange={e => applySelect(e)}>
          {tags.map((selected, i) => (
            <option key={i} className={styles.category + `${selected === 'all' && !tag ? ` ${styles.active}` : selected === tag ? ` ${styles.active}` : ''}`} value={selected} selected={selected === tag}>{selected[0].toUpperCase() + selected.slice(1)}</option>
          ))}
        </select>
      </div>
      <div className={styles.articles}>
        {articles.filter(article => !tag ? article : article.frontmatter.tags.find(articleTag => articleTag.toLowerCase() === tag)).map((article, i) => {
          const link = getPage(article.frontmatter.parent).filePath + '/' + article.fields.slug + `${tag ? '?tag=' + tag : ''}`
          return (
            <div key={i} className={styles.article}>
              <Link className={styles.imageLink} to={link}>
                <Image images={images} className={styles.image} src={article.frontmatter.heroImage.relativePath} container='div' />
              </Link>
              <Link className={styles.titleLink} to={link}>
                <h2 className={styles.title}>{article.frontmatter.title}</h2>
              </Link>
              <Link className={styles.buttonLink} to={link}>
                <p className={styles.text}>Read Full Story</p>
                <img className={styles.arrow} src={arrow} alt='Read Full Story' />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
