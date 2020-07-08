import React, { useState } from 'react'

import { classNames, enabled, Image } from '../exports'

export const Leadership = ({ block, styles, images }) => {
  const [index, setIndex] = useState(0)
  return (
    <section className={classNames(block, styles)}>
      <h1 className={styles.heading}>{block.heading}</h1>
      <div className={styles.leaders}>
        {enabled(block.leaders).map((leader, i) => {
          const setActiveIndex = () => {
            setIndex(i)
          }
          return (
            <div key={i} className={styles.leader + `${index === i ? ` ${styles.active}` : ''}`} onClick={setActiveIndex}>
              <Image className={styles.image} images={images} container='div' src={leader.photo.image} alt={leader.photo.alt} title={leader.photo.title}>
                <p className={styles.name}>{leader.name}</p>
                <p className={styles.title}>{leader.title}</p>
              </Image>
            </div>
          )
        })}
      </div>
      {block.leaders[index] && (
        <div className={styles.detail}>
          {block.leaders[index].name && <h2 className={styles.name}>{block.leaders[index].name}</h2>}
          {block.leaders[index].title && <h3 className={styles.title}>{block.leaders[index].title}</h3>}
          {block.leaders[index].biography && (
            <div className={styles.biography}>
              {block.leaders[index].biography.split('\n').map((paragraph, i) => (
                <p key={i} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
