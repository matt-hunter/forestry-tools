import React from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollAnimation from 'react-animate-on-scroll'

import 'animate.css/animate.min.css'

import { classNames, Image } from '../exports'
import { Button } from '../shared'

export const StaticImage = ({ block, styles, images, pages, toggleForm }) => {
  const [ref, inView] = useInView({ threshold: 0.7, root: typeof window !== 'undefined' ? document.getElementById('main') : undefined })
  return (
    <section ref={ref} className={classNames(block, styles) + `${inView ? ` ${styles.inView}` : ''}`}>
      <Image images={images} className={styles.image} container='div' src={block.image.image} title={block.image.title} alt={block.image.alt} />
      <div className={styles.textContainer}>
        {block.heading && (
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce scrollableParentSelector='#main' offset={150} delay={1000}>
            <h1 className={styles.heading}>{block.heading}</h1>
          </ScrollAnimation>
        )}
        {block.subheading && (
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce scrollableParentSelector='#main' offset={150} delay={1500}>
            <h2 className={styles.subheading}>{block.subheading}</h2>
          </ScrollAnimation>
        )}
        {block.button && block.showButton && (
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce scrollableParentSelector='#main' offset={150} delay={2000}>
            <Button text='Find out more' direction='right' styles={styles} pages={pages} link={block.button.link} onClick={toggleForm} />
          </ScrollAnimation>
        )}
      </div>
    </section>
  )
}
