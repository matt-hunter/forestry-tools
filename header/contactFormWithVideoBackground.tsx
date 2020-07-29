import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

import { Image } from '../exports'
import { Button } from '../shared'

export const ContactFormWithVideoBackground = ({ block, images, menuOpen, styles }) => {
  const [disabled, setDisabled] = useState(false)
  const [playing, setPlaying] = useState(true)

  const video = block.videoFile && images.find(video => video.relativePath === 'images/' + block.videoFile.split('/').pop())

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('playing') === 'no') setDisabled(true)
    }
  }, [])

  useEffect(() => {
    if (menuOpen && !disabled) {
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }, [menuOpen])

  return (
    <section className={styles.default}>
      <div className={styles.videoContainer}>
        <ReactPlayer playing={playing} autoplay muted loop playsinline controls={false} volume={0} pip={false} className={styles.video} url={video ? video.publicURL : block.video} width='100%' height='100%' />
      </div>
      <Image images={images} className={styles.image} src={block.image} container='div' />
      <form className={styles.form + ' pageclip-form'} action={block.url} method='post'>
        <h1 className={styles.heading}>{block.heading}</h1>
        <h2 className={styles.subheading}>{block.subheading}</h2>
        <fieldset className={styles.nameSet}>
          <label className={styles.nameLabel}>{block.nameLabel}</label>
          <input name='name' className={styles.name} type='text' required />
        </fieldset>
        <fieldset className={styles.methodSet}>
          <label className={styles.methodLabel}>{block.phoneLabel}</label>
          <input type='email' name='email' className={styles.method} required />
        </fieldset>
        <fieldset className={styles.messageSet}>
          <label className={styles.messageLabel}>{block.messageLabel}</label>
          <textarea name='message' rows={1} className={styles.message} required />
        </fieldset>
        <Button text='Send' direction='right' styles={styles} className='pageclip-form__submit' type='submit' />
      </form>
    </section>
  )
}
