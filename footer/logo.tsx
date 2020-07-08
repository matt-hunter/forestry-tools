import React from 'react'

export const Logo = ({ block, styles, images }) => {
  console.log(block.template, block)
  return (
    <section className={styles.default}>
      <p>{block.template}</p>
    </section>
  )
}
