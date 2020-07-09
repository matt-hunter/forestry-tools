import React from 'react'
import camelcase from 'camelcase'

import { classNames, enabled, Image } from '../exports'

export const Hero = ({ block, styles, images }) => {
  return (
    <section className={classNames(block, styles)}>
      {enabled(block.backgrounds).map((background, i) => {
        return (
          <Image key={i} className={styles.image} images={images} src={background.image} title={background.title} alt={background.alt} />
        )
      })}
      <div className={styles.textContainer}>
        <h1 className={styles.smallHeading}>{block.smallHeading}</h1>
        <h2 className={styles.largeHeading}>{block.largeHeading}</h2>
        <p className={styles.body}>{block.body}</p>
      </div>
      <div className={styles.pageDownIconContainer}>
        <Image className={styles.icon} images={images} src={block.pageDownIcon.image} title={block.pageDownIcon.title} alt={block.pageDownIcon.alt} />
      </div>
      <div className={styles.animatedElement + ' ' + styles[camelcase(block.animatedElement)]} />
    </section>
  )
}
