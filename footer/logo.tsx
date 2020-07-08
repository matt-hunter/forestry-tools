import React from 'react'

export const Logo = ({ block, styles, images }) => {
  return (
    <section className={styles.default}>
      <p>{block.template}</p>
    </section>
  )
}
