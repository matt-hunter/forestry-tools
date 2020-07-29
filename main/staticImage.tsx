import React from 'react'
import ReactPlayer from 'react-player/lazy'

import { classNames, Image } from '../exports'
import { Button } from '../shared'

export const StaticImage = ({ block, styles, images, pages, toggleForm }) => {
  const videos = block.videos && block.videos.map(videoFile => {
    const video = images.find(video => video.relativePath === 'images/' + videoFile.split('/').pop())
    return video && video.publicURL
  })
  console.log(videos)

  return (
    <section className={classNames(block, styles)}>
      {block.image && !videos.length && <Image images={images} className={styles.image} container='div' src={block.image.image} title={block.image.title} alt={block.image.alt} />}
      <div className={styles.textContainer}>
        {block.heading && (
          <h1 className={styles.heading}>{block.heading}</h1>
        )}
        {block.subheading && (
          <h2 className={styles.subheading}>{block.subheading}</h2>
        )}
        {block.button && block.showButton && (
          <Button text='Find out more' direction='right' styles={styles} pages={pages} link={block.button.link} onClick={toggleForm} />
        )}
      </div>
      {videos && videos.length ? (
        <div className={styles.videoContainer}>
          <ReactPlayer autoplay playing muted loop playsinline controls={false} volume={0} pip={false} className={styles.video} url={videos} width='100%' height='100%' />
        </div>
      ) : null}
    </section>
  )
}
