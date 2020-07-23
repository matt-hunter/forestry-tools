import React from 'react'
import ReactPlayer from 'react-player'

import { Image } from '../exports'
import { Button } from '../shared'

export const ContactFormWithVideoBackground = ({ block, images, styles }) => {
  const formSubmit = e => {
    e.preventDefault()
  }
  return (
    <section className={styles.default}>
      <div className={styles.videoContainer}>
        <ReactPlayer playing muted loop className={styles.video} url={block.video} width='100%' height='100%' />
      </div>
      <Image images={images} className={styles.image} src={block.image} />
      <form className={styles.form}>
        <h1 className={styles.heading}>{block.heading}</h1>
        <h2 className={styles.subheading}>{block.subheading}</h2>
        <fieldset className={styles.nameSet}>
          <label className={styles.nameLabel}>{block.nameLabel}</label>
          <input className={styles.name} type='text' />
        </fieldset>
        <fieldset className={styles.methodSet}>
          <label className={styles.methodLabel}>{block.phoneLabel}</label>
          <input className={styles.method} type='text' />
        </fieldset>
        <fieldset className={styles.messageSet}>
          <label className={styles.messageLabel}>{block.messageLabel}</label>
          <textarea rows={1} className={styles.message} />
        </fieldset>
        <Button text='Send' direction='right' styles={styles} onClick={formSubmit} />
      </form>
    </section>
  )
}
