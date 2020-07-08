import React from 'react'

import { ContactInfo } from '../footer'

export default (block, i, images, styles, pages, contactInfo) => {
  return block.template === 'footer-contact-info' ? (
    <ContactInfo key={i} styles={styles} contactInfo={contactInfo} />
  ) : block.template === 'footer-copyright-info' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'footer-logo' ? (
    <p key={i}>{block.template}</p>
  ) : <p key={i}>{block.template} not defined</p>
}
