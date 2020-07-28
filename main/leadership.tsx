import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import 'animate.css/animate.min.css'

import { classNames, enabled, Image } from '../exports'

export const Leadership = ({ block, styles, images }) => {
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(undefined)

  const Detail = ({ className, index, setIndex, required }) => (
    <div className={styles[className]}>
      <div className={styles.leaders}>
        {enabled(block.leaders).map((leader, i) => <Leader key={i} leader={leader} i={i} index={index} setIndex={setIndex} required={required} />)}
      </div>
      {index !== undefined && block.leaders[index] && (
        <ScrollAnimation animateIn='animate__fadeIn' animateOnce scrollableParentSelector='#main' offset={150}>
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
        </ScrollAnimation>
      )}
    </div>
  )

  const Leader = ({ leader, i, index, setIndex, required }) => {
    const setActiveIndex = () => {
      setIndex(!required && index === i ? undefined : i)
    }

    return leader && i !== undefined ? (
      <div className={styles.leader + `${index === i ? ` ${styles.active}` : ''}`} onClick={setActiveIndex}>
        <Image className={styles.image} images={images} container='div' src={leader.photo.image} alt={leader.photo.alt} title={leader.photo.title}>
          <p className={styles.name}>{leader.name}</p>
          <p className={styles.title}>{leader.title}</p>
        </Image>
      </div>
    ) : null
  }

  return (
    <section className={classNames(block, styles)}>
      <h1 className={styles.heading}>{block.heading}</h1>
      <Detail className='mobile' index={mobileIndex} setIndex={setMobileIndex} required={false} />
      <Detail className='desktop' index={desktopIndex} setIndex={setDesktopIndex} required />
    </section>
  )
}
