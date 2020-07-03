import React from 'react'
import ReactPlayer from 'react-player'
import camelcase from 'camelcase'

import { classNames, enabled, Image } from '../../utilities'

import styles from './contentTabs.module.scss'

export const ContentTabs = ({ block, images }) => {
  return (
    <section className={classNames(block, styles, 'section')}>
      {block.title && <h1 className={styles.title}>{block.title}</h1>}
      <div className={styles.tabContainer}>
        {enabled(block.tabs).map((tab, i) => (
          <div className={classNames(tab, styles, 'tab')} key={i}>
            {tab.label && <h2 className={styles.label}>{tab.label}</h2>}
            <div key={i} className={styles.content}>
              {enabled(tab.content).map((block, i) => (
                <React.Fragment key={i}>
                  {block.template === 'rich-text' && (
                    block.content && <div className={classNames(block, styles, 'richText')} dangerouslySetInnerHTML={{ __html: block.content }} />
                  )}
                  {block.template === 'image' && (
                    block.image && <Image className={classNames(block, styles, 'image')} src={block.image} alt={block.alt} title={block.title} images={images} />
                  )}
                  {block.template === 'video' && block.videoUrl && (
                    <div className={classNames(block, styles, 'video')}>
                      <ReactPlayer className={styles.video} light url={block.videoUrl} />
                      <p className={styles.label}>{block.label}</p>
                    </div>
                  )}
                  {block.template === 'button' && (
                    <div className={styles.buttonContainer}>
                      <button className={classNames(block, styles, camelcase(block.style))}>{block.buttonText}</button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
