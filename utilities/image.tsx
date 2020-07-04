import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

type imageProps = {
  className: string,
  container?: string,
  src: string,
  alt?: string,
  title?: string,
  style?: any,
  children?: React.ReactNode
}

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

export default ({ className, container, src, alt = '', title = '', style, children }: imageProps) => {
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

  const [images, setImages] = useState<any>([])
  const [image, setImage] = useState<any>(undefined)

  useEffect(() => {
    if (data) {
      setImages(data.allFile.nodes)
    }
  }, [data])

  useEffect(() => {
    if (images) {
      setImage(images.find(image => image.relativePath === 'images/' + src.split('/').pop()))
    }
  })

  return !container ? (
    image && image.childImageSharp && image.childImageSharp.fluid ? (
      <Img className={className} style={style} fluid={image.childImageSharp.fluid} title={title} alt={alt || title} />
    ) : image && image.publicURL ? (
      <img className={className} style={style} src={image.publicURL} alt={alt || title} title={title || alt} />
    ) : null
  ) : (
    image && image.childImageSharp && image.childImageSharp.fluid ? (
      <BackgroundImage className={className} Tag={container || 'div'} style={style} fluid={image.childImageSharp.fluid} title={title} alt={alt || title}>{children}</BackgroundImage>
    ) : image && image.publicURL ? (
      <div className={className} style={{ ...style, backgroundImage: `url("${image.publicURL}")` }} />
    ) : null
  )
}
