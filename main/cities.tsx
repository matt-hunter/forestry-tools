import React from 'react'

import { classNames, enabled, Image } from '../exports'

export const Cities = ({ block, styles, images }) => {
  return (
    <section className={classNames(block, styles)}>
      <div className={styles.textContainer}>
        {block.title && <h1 className={styles.title}>{block.title}</h1>}
        {block.body && <p className={block.body}>{block.body}</p>}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Get in touch</button>
        </div>
      </div>
      {enabled(block.cities).map((city, i) => {
        return (
          <div key={i} className={styles.city}>
            <Image className={styles.image} src={city.image.image} images={images} title={city.image.title} alt={city.image.alt} />
            <p className={styles.name}>{city.name}</p>
            <p className={styles.nativeLanguageName}>{city.nativeLanguageName}</p>
          </div>
        )
      })}
    </section>
  )
}
