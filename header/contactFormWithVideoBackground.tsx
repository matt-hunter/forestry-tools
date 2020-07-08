import React from 'react'

import { Image } from '../exports'
import ReactPlayer from 'react-player'

export const ContactFormWithVideoBackground = ({ block, images, styles }) => {
  return (
    <div className={styles.default}>
      <div className={styles.videoContainer}>
        <ReactPlayer playing muted className={styles.video} url={block.video} width='100%' height='100%' />
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
          <textarea className={styles.message} />
        </fieldset>
        <button className={styles.submit}>Send</button>
      </form>
    </div>
  )
}
