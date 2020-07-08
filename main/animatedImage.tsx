import React from 'react'

import { classNames } from '../exports'

export const AnimatedImage = ({ block, styles }) => {
  console.log(block.template, block)
  return (
    <section className={classNames(block, styles)}>
      <p>{block.template}</p>
    </section>
  )
}
