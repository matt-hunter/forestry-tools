import React from 'react'

export default (block, i, images, styles, pages, contactInfo) => {
  return block.template === 'footer-contact-info' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'footer-copyright-info' ? (
    <p key={i}>{block.template}</p>
  ) : block.template === 'footer-logo' ? (
    <p key={i}>{block.template}</p>
  ) : <p key={i}>{block.template} not defined</p>
}
