import React from 'react'

import { AnimatedImage, ArticlesGrid, ArticlesSlider, Cities, CompanyMerger, ContactForm, ContentColumns, ContentTabs, FeaturedArticles, FilteredImagesSlider, Gallery, Hero, HeroSlider, Highlights, ImageBar, Images, KnowledgeBase, Leadership, Map, Posts, RecentArticles, Slideshow, StaticImage, Testimonial } from '../main'

export default (block, i, images, styles, articles, pages, tag) => {
  console.log(tag)
  return block.template === 'main-animated-image' ? (
    <AnimatedImage key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-articles-grid' ? (
    <ArticlesGrid key={i} block={block} images={images} styles={styles} articles={articles} pages={pages} tag={tag} />
  ) : block.template === 'main-articles-slider' ? (
    <ArticlesSlider key={i} block={block} images={images} styles={styles} articles={articles} />
  ) : block.template === 'main-cities' ? (
    <Cities key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-company-merger' ? (
    <CompanyMerger key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-contact-form' ? (
    <ContactForm key={i} block={block} styles={styles} />
  ) : block.template === 'main-content-columns' ? (
    <ContentColumns key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-content-tabs' ? (
    <ContentTabs key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-featured-articles' ? (
    <FeaturedArticles key={i} block={block} images={images} styles={styles} articles={articles} pages={pages} />
  ) : block.template === 'main-filtered-images-slider' ? (
    <FilteredImagesSlider key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-gallery' ? (
    <Gallery key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-hero' ? (
    <Hero key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-hero-slider' ? (
    <HeroSlider key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-highlights' ? (
    <Highlights key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-image-bar' ? (
    <ImageBar key={i} block={block} styles={styles} images={images} />
  ) : block.template === 'main-images' ? (
    <Images key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-knowledge-base' ? (
    <KnowledgeBase key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-leadership' ? (
    <Leadership key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-map' ? (
    <Map key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-posts' ? (
    <Posts key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-recent-articles' ? (
    <RecentArticles key={i} block={block} images={images} styles={styles} articles={articles} pages={pages} />
  ) : block.template === 'main-slideshow' ? (
    <Slideshow key={i} block={block} images={images} styles={styles} />
  ) : block.template === 'main-static-image' ? (
    <StaticImage key={i} block={block} images={images} styles={styles} pages={pages} />
  ) : block.template === 'main-testimonial' ? (
    <Testimonial key={i} block={block} styles={styles} images={images} />
  ) : <p key={i}>{block.template} not defined</p>
}
