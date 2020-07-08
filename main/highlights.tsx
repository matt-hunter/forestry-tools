import React, { useState } from 'react'

import { classNames, enabled, Image } from '../exports'

export const Highlights = ({ block, styles, images }) => {
  const [index, setIndex] = useState(0)
  return (
    <section className={classNames(block, styles)}>
      <h1 className={styles.heading}>{block.heading}</h1>
      <div className={styles.highlights}>
        {enabled(block.highlights).map((highlight, i) => {
          const setActiveIndex = () => {
            setIndex(i)
          }
          return (
            <div key={i} className={styles.highlight + `${index === i ? ` ${styles.active}` : ''}`} onClick={setActiveIndex}>
              <Image className={styles.image} images={images} container='div' src={highlight.image.image} title={highlight.image.title} alt={highlight.image.alt}>
                <p className={styles.index}>{`${index < 10 ? '0' : ''}${index + 1}`}</p>
              </Image>
            </div>
          )
        })}
      </div>
      {block.highlights[index] && (
        <div className={styles.detail}>
          {block.highlights[index].image && <Image className={styles.image} images={images} container='div' src={block.highlights[index].image.image} title={block.highlights[index].image.title} alt={block.highlights[index].image.alt} />}
          {block.highlights[index].title && <h2 className={styles.title}>{block.highlights[index].title}</h2>}
          {block.highlights[index].body && <p className={styles.body}>{block.highlights[index].body}</p>}
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Get in touch</button>
          </div>
        </div>
      )}
    </section>
  )
}
