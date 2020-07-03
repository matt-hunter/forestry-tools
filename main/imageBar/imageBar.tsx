import React from 'react'

import { classNames, enabled, Image } from '../../utilities'

import styles from './imageBar.module.scss'

export const ImageBar = ({ block, images }) => {
  console.log(block)

  return (
    <section className={classNames(block, styles, 'section')}>
      {enabled(block.images).map((item, i) => {
        return item.url ? (
          <a className={styles.link} key={i} href={item.url}>
            {item.image ? <Image className={styles.image} src={item.image} alt={item.alt} title={item.title} images={images} /> : <p>{item.alt}</p>}
          </a>
        ) : (
          item.image ? <Image key={i} className={styles.image} src={item.image} alt={item.alt} title={item.title} images={images} /> : <p>{item.alt}</p>
        )
      })}
    </section>
  )
}
