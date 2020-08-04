import React, { useState } from 'react'
import Select from 'react-select'

import 'animate.css/animate.min.css'

import { classNames, enabled, Image } from '../exports'

export const Leadership = ({ block, styles, images }) => {
  const [array, setArray] = useState(block.leaders)
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(undefined)
  const [mobileOption, setMobileOption] = useState('leaders')

  const setActiveArray = () => {
    setArray(array === block.leaders ? block.staff : block.leaders)
    setDesktopIndex(0)
    setMobileIndex(undefined)
  }

  const applySelect = e => {
    setMobileOption(e.value)
    setArray(block[e.value])
    setMobileIndex(undefined)
  }

  const options = [{
    value: 'leaders',
    label: 'Leadership'
  }, {
    value: 'staff',
    label: 'Staff'
  }]

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 0,
      border: '4px solid var(--color-alizarin)'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: 'var(--color-midnight-express)',
      height: 40,
      width: 40
    })
  }

  const Detail = ({ className, index, setIndex, required }) => (
    <div className={styles[className]}>
      <div className={styles.leaders}>
        {enabled(array).map((leader, i) => <Leader key={i} leader={leader} i={i} index={index} setIndex={setIndex} required={required} />)}
      </div>
      {index !== undefined && array[index] && (
        <div className={styles.detail}>
          {array[index].name && <h2 className={styles.name}>{array[index].name}</h2>}
          {array[index].title && <h3 className={styles.title}>{array[index].title}</h3>}
          {array[index].biography && (
            <div className={styles.biography}>
              {array[index].biography.split('\n').map((paragraph, i) => (
                <p key={i} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )

  const Leader = ({ leader, i, index, setIndex, required }) => {
    const setActiveIndex = () => {
      setIndex(!required && index === i ? undefined : i)
    }

    return leader && i !== undefined ? (
      <div className={styles.leader + `${index === i ? ` ${styles.active}` : ''}`} onClick={setActiveIndex}>
        <Image className={styles.image} images={images} container='div' src={leader.photo.image} alt={leader.photo.alt} title={leader.photo.title}>
          <p className={styles.name}>{leader.name}</p>
          <p className={styles.title}>{leader.title}</p>
        </Image>
      </div>
    ) : null
  }

  return (
    <section className={classNames(block, styles)}>
      <button onClick={setActiveArray} className={styles.heading + `${array === block.leaders ? ` ${styles.active}` : ''}`}>Leadership</button>
      <button onClick={setActiveArray} className={styles.heading + `${array === block.staff ? ` ${styles.active}` : ''}`}>Staff</button>
      <div className={styles.selectContainer}>
        <Select
          className={styles.categoriesList}
          onChange={e => applySelect(e)}
          blurInputOnSelect
          isSearchable={false}
          options={options}
          value={options.find(option => option.value === mobileOption) || options[0]}
          styles={selectStyles}
        />
      </div>
      <Detail className='mobile' index={mobileIndex} setIndex={setMobileIndex} required={false} />
      <Detail className='desktop' index={desktopIndex} setIndex={setDesktopIndex} required />
    </section>
  )
}
