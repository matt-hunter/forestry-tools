import React from 'react'

import { CallButton, FavoritePage, FeaturedPage, FillSpace, Logo, Navigation, Search } from '../header'

export default (block, i, images, styles, pages) => {
  return block.template === 'header-logo' ? (
    <Logo key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'header-fill-space' ? (
    <FillSpace key={i} styles={styles} />
  ) : block.template === 'header-navigation' ? (
    <Navigation key={i} block={block} styles={styles} pages={pages} />
  ) : block.template === 'header-featured-page' ? (
    <FeaturedPage key={i} block={block} styles={styles} pages={pages} />
  ) : block.template === 'header-favorite-page' ? (
    <FavoritePage key={i} block={block} styles={styles} images={images} pages={pages} />
  ) : block.template === 'header-call-button' ? (
    <CallButton key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'header-search' ? (
    <Search key={i} block={block} styles={styles} images={images} />
  ) : <p key={i}>{block.template} not defined</p>
}
