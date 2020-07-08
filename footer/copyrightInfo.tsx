import React from 'react'

export const CopyrightInfo = ({ block, styles, pages }) => {
  console.log(block.template, block)
  return (
    <section className={styles.default}>
      <p>{block.template}</p>
    </section>
  )
}
