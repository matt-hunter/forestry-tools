import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import slugify from 'slugify'

import { enabled } from '../utilities'

type dataObject = {
  allPagesJson: {
    nodes: {
      title: string,
      settings: {
        disabled: boolean
      }
    }
  }
}

export default ({ target }) => {
  const [data] = useState<dataObject>(useStaticQuery(graphql`
  {
    allPagesJson {
      nodes {
        title
        settings {
          disabled
        }
      }
    }
  }
`))

  const [pages, setPages] = useState([])
  const [page, setPage] = useState(undefined)

  useEffect(() => {
    if (data) {
      setPages(enabled(data.allPagesJson.nodes).map(page => ({
        title: page.title,
        slug: page.title === 'Home' ? '/' : slugify(page.title).toLowerCase()
      })))
    }
  }, [])

  useEffect(() => {
    if (pages.length) setPage(pages.find(page => page.slug === target.replace('.forestry/content/pages/', '').replace('.json', '')))
  }, [pages])

  return page && page.title ? (
    <p>{page}</p>
  ) : (
    <p>Page Not Found</p>
  )
}
