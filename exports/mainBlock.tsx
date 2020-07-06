import React from 'react'

import { ContactForm, ContentColumns, ContentTabs, Hero, ImageBar, Testimonial } from '../main'

export default (block, i, images, styles) => {
  return block.template === 'main-contact-form' ? (
    <ContactForm key={i} block={block} styles={styles} />
  ) : block.template === 'main-filtered-images-slider' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-content-columns' ? (
    <ContentColumns key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-content-tabs' ? (
    <ContentTabs key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-gallery' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-hero' ? (
    <Hero key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-image-bar' ? (
    <ImageBar key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-images' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-knowledge-base' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-map' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-posts' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-recent-research' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-research-grid' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-research-slider' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-slideshow' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'main-testimonial' ? (
    <Testimonial key={i} block={block} styles={styles} images={images} />
  ) : <p key={i}>{block.template} not defined</p>
}
