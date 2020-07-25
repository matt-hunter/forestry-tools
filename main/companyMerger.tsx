import React from 'react'

import { classNames, enabled, Image } from '../exports'

export const CompanyMerger = ({ block, styles, images }) => {
  return (
    <section className={classNames(block, styles)}>
      <div className={styles.textContainer}>
        {block.heading && <h1 className={styles.heading}>{block.heading}</h1>}
        {block.body && <p className={styles.body}>{block.body}</p>}
      </div>
      <div className={styles.companies}>
        {enabled(block.companies).map((company, i) => {
          return (
            <React.Fragment key={i}>
              {i > 0 && <p className={styles.plusSymbol}>+</p>}
              <div className={styles.company}>
                <Image className={styles.image} images={images} src={company.logo.image} title={company.logo.title} alt={company.logo.alt} container='div' />
                {company.description && <p className={styles.description}>{company.description}</p>}
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}
