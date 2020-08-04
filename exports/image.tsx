import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

type imageProps = {
  className: string,
  container?: string,
  src: string,
  alt?: string,
  title?: string,
  style?: any,
  children?: React.ReactNode,
  onClick?: any,
  images: any
}

export default ({ className, container, src, alt = '', title = '', style, children, images, onClick }: imageProps) => {
  const image = images.find(image => image.relativePath === 'images/' + src.split('/').pop())

  return !container ? (
    image && image.childImageSharp && image.childImageSharp.fluid ? (
      <Img fadeIn={false} onClick={onClick || ''} className={className} style={style} fluid={image.childImageSharp.fluid} title={title} alt={alt || title || 'no title'} />
    ) : image && image.publicURL ? (
      <img onClick={onClick || ''} className={className} style={style} src={image.publicURL} alt={alt || title} title={title || alt} />
    ) : null
  ) : (
    image && image.childImageSharp && image.childImageSharp.fluid ? (
      <BackgroundImage fadeIn={false} onClick={onClick || ''} className={className} Tag={container || 'div'} style={style} fluid={image.childImageSharp.fluid} title={title} alt={alt || title || 'no title'}>{children}</BackgroundImage>
    ) : image && image.publicURL ? (
      <div onClick={onClick || ''} className={className} style={{ ...style, backgroundImage: `url("${image.publicURL}")` }}>{children}</div>
    ) : null
  )
}
