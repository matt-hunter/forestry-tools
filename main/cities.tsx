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
      {enabled(block.cities)[0] && (
        <div className={styles.featuredCity}>
          <Image className={styles.image} src={enabled(block.cities)[0].image.image} images={images} title={enabled(block.cities)[0].image.title} alt={enabled(block.cities)[0].image.alt} container='div'>
            <p className={styles.name}>{enabled(block.cities)[0].name}</p>
            <p className={styles.nativeLanguageName}>{enabled(block.cities)[0].nativeLanguageName}</p>
          </Image>
        </div>
      )}
      {enabled(block.cities).length > 1 && (
        <div className={styles.cities}>
          {enabled(block.cities).map((city, i) => {
            return i > 0 && (
              <div key={i} className={styles.city}>
                <Image className={styles.image} src={city.image.image} images={images} title={city.image.title} alt={city.image.alt} container='div'>
                  <p className={styles.name}>{city.name}</p>
                  <p className={styles.nativeLanguageName}>{city.nativeLanguageName}</p>
                </Image>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
