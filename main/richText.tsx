import React from 'react'

export const RichText = ({ block, styles }) => {
  return (
    <div className={styles.default}>
      {block.template}
    </div>
  )
}
