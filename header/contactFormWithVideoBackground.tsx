import React from 'react'

import { Image } from '../exports'
import ReactPlayer from 'react-player'

export const ContactFormWithVideoBackground = ({ block, images, styles }) => {
  return (
    <ReactPlayer className={styles.default} video={block.video}>
      <Image images={images} className={styles.image} src={block.image} container='div'>
        <form className={styles.form}>
          <h1 className={styles.heading}>{block.heading}</h1>
          <h2 className={styles.subheading}>{block.subheading}</h2>
          <fieldset className={styles.nameSet}>
            <label className={styles.nameLabel}>{block.nameLabel}</label>
            <input className={block.name} type='text' />
          </fieldset>
          <fieldset className={styles.method}>
            <label className={styles.methodLabel}>{block.phoneLabel}</label>
            <input className={styles.method} type='text' />
          </fieldset>
          <fieldset className={styles.message}>
            <label className={styles.messageLabel}>{block.messageLabel}</label>
            <textarea className={styles.message} />
          </fieldset>
          <button className={styles.submit}>Send</button>
        </form>
      </Image>
    </ReactPlayer>
  )
}
