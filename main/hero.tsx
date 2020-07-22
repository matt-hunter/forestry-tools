import React from 'react'
import Tilt from 'react-parallax-tilt'

import { classNames, enabled, Image } from '../exports'

import { OilPriceTicker } from './'

export const Hero = ({ block, styles, images }) => {
  const scrollDown = () => {
    document.getElementById('main').scroll({
      left: 0,
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section id='hero' className={classNames(block, styles)}>
      <div className={styles.backgrounds}>
        {enabled(block.backgrounds).map((background, i) => (
          <Tilt
            key={i}
            className='parallax-effect-glare-scale'
            perspective={500}
            glareEnable
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div className={styles.imageContainer + `${background.class ? ` ${styles[background.class]}` : ''}`}>
              <Image className={styles.image} images={images} src={block.backgrounds[i].image} title={background.title} alt={background.alt} />
            </div>
          </Tilt>
        ))}
      </div>
      <OilPriceTicker styles={styles} />
      <div className={styles.textContainer}>
        <h1 className={styles.smallHeading}>{block.smallHeading}</h1>
        <h2 className={styles.largeHeading}>{block.largeHeading}</h2>
        <p className={styles.body}>{block.body}</p>
      </div>
      <div onClick={scrollDown} className={styles.pageDownIconContainer}>
        <Image className={styles.icon} images={images} src={block.pageDownIcon.image} title={block.pageDownIcon.title} alt={block.pageDownIcon.alt} />
        <p className={styles.label}>Scroll</p>
      </div>
      {block.showRedBar && <div className={styles.redBar} />}
    </section>
  )
}
