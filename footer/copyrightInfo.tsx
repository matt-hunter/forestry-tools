import React from 'react'

export const CopyrightInfo = ({ block, styles, pages }) => {
  return (
    <section className={styles.default}>
      <p>{block.template}</p>
    </section>
  )
}
