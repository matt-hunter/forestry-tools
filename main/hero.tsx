import React, { useEffect, useState } from 'react'

import { classNames, enabled, Image } from '../exports'

import arrowDown from '../images/arrow-down.svg'
import arrowUp from '../images/arrow-up.svg'
import droplet from '../images/droplet.svg'

export const Hero = ({ block, styles, images }) => {
  const [oilData, setOilData] = useState([])
  const [oilPrices, setOilPrices] = useState([])

  useEffect(() => {
    window.fetch('http://api.eia.gov/series/?api_key=2c64d808bf1a095b0a22eb601b723c20&series_id=PET.RWTC.D;PET.RBRTE.D').then(async res => {
      const data = await res.json()
      setOilData(data.series)
    // setWti(data.series[0].data)
    // setBrent(data.series[1].data)
    })
  }, [])

  useEffect(() => {
    if (oilData.length) {
      const calculateObject = (name, series) => {
        const price = series.data[0][1]
        const previous = series.data[1][1]
        const difference = price - previous
        const change = (((series.data[0][1] / series.data[1][1]) - 1) * 100).toFixed(2) + '%'
        return ({
          name,
          decrease: price < 0,
          price,
          difference: (difference < 0 ? '' : '+') + difference.toFixed(2),
          change: (difference < 0 ? '' : '+') + change
        })
      }

      setOilPrices([
        calculateObject('WTI Crude Oil', oilData[0]),
        calculateObject('Brent Crude Oil', oilData[1])
      ])
    }
  }, [oilData])

  useEffect(() => {
    if (oilPrices.length) {
      console.log(oilPrices)
    }
  }, [oilPrices])

  return (
    <section id='hero' className={classNames(block, styles)}>
      {enabled(block.backgrounds).map((background, i) => (
        <Image key={i} className={styles.image} images={images} src={background.image} title={background.title} alt={background.alt} />
      ))}
      <div className={styles.priceContainer}>
        {oilPrices.map((oilPrice, i) => {
          return (
            <div key={i} className={styles.oilPrice}>
              <span className={styles.name}>{oilPrice.name}</span>
              <img src={droplet} alt='oil' />
              <span className={styles.change + `${oilPrice.decrease ? ` ${styles.decrease}` : ` ${styles.increase}`}`}>
                {oilPrice.decrease ? (
                  <img src={arrowDown} alt='down' />
                ) : (
                  <img src={arrowUp} alt='up' />
                )}
              </span>
              <span className={styles.price}>{oilPrice.price}</span>
              <span className={styles.difference}>{oilPrice.difference}</span>
              <span className={styles.change + `${oilPrice.decrease ? ` ${styles.decrease}` : ` ${styles.increase}`}`}>{oilPrice.change}</span>
            </div>
          )
        })}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.smallHeading}>{block.smallHeading}</h1>
        <h2 className={styles.largeHeading}>{block.largeHeading}</h2>
        <p className={styles.body}>{block.body}</p>
      </div>
      <div className={styles.pageDownIconContainer}>
        <Image className={styles.icon} images={images} src={block.pageDownIcon.image} title={block.pageDownIcon.title} alt={block.pageDownIcon.alt} />
        <p>Scroll</p>
      </div>
    </section>
  )
}
