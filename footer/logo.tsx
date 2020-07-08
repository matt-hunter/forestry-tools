import React from 'react'

export const Logo = ({ block, styles, images }) => {
  const blockValues = Object.entries(block).filter(([name, value]) => value !== null)
    .map(([name, value]) => ({ name, value }))
  console.log(block.template, blockValues)
  return (
    <section className={styles.default}>
      <p>{block.template}</p>
    </section>
  )
}
