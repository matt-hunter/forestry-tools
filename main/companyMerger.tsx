import React from 'react'

import { classNames, enabled, Image } from '../exports'

export const CompanyMerger = ({ block, styles, images }) => {
  return (
    <section className={classNames(block, styles)}>
      <div className={styles.textContainer}>
        {block.heading && <h1 className={styles.heading}>{block.heading}</h1>}
        {block.body && <p className={styles.body}>{block.body}</p>}
      </div>
      {enabled(block.cities).map((city, i) => {
        return (
          <div className={styles.city} key={i}>
            {i > 0 && <p>+</p>}
            <Image className={styles.image} images={images} src={city.logo.image} title={city.logo.title} alt={city.logo.alt} />
            {city.description && <p className={styles.description}>{city.description}</p>}
          </div>
        )
      })}
    </section>
  )
}
