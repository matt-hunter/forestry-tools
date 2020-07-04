import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Image } from '../utilities'

type dataObject = {
  allFile: {
    nodes: {
      publicURL: string,
      relativePath: string,
      childImageSharpFluid: {
        fluid: any
      }
    }
  }
}

export const CallButton = ({ block, styles, images }) => {
  const [data] = useState<dataObject>(useStaticQuery(graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "images"}}) {
      nodes {
        publicURL
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`))

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <a className={styles.callButton} href={`tel:+${block.phoneNumber}`}>
      <Image className={styles.icon} src={block.icon.image} alt={block.icon.alt} title={block.icon.title} images={images} />
      <div className={styles.text}>
        <span className={styles.label}>
          {block.text}
        </span>
        <br />
        <span className={styles.phoneNumber}>
          {block.phoneNumber.slice(0, 3) + '-' + block.phoneNumber.slice(3, 6) + '-' + block.phoneNumber.slice(6)}
        </span>
      </div>
    </a>
  )
}
