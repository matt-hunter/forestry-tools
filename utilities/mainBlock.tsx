import { ContactForm, ContentColumns, ContentTabs, Hero, ImageBar, Testimonial } from '../main'

export default (block, i, images, styles) => [{
  name: 'main-contact-form',
  template: <ContactForm key={i} block={block} styles={styles} />
}, {
  name: 'main-filtered-images-slider',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-content-columns',
  template: <ContentColumns key={i} block={block} styles={styles} images={images} />
}, {
  name: 'main-content-tabs',
  template: <ContentTabs key={i} block={block} styles={styles} images={images} />
}, {
  name: 'main-gallery',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-hero',
  template: <Hero key={i} block={block} styles={styles} images={images} />
}, {
  name: 'main-image-bar',
  template: <ImageBar key={i} block={block} styles={styles} images={images} />
}, {
  name: 'main-images',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-knowledge-base',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-map',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-posts',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-recent-research',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-research-grid',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-research-slider',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-slideshow',
  template: <p key={i}>{block.template}</p>
}, {
  name: 'main-testimonial',
  template: <Testimonial key={i} block={block} styles={styles} images={images} />
}].find(template => template.name === block.template).template
