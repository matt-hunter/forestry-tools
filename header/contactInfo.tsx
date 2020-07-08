import React from 'react'

export const ContactInfo = ({ styles, contactInfo }) => {
  return (
    <section className={styles.default}>
      {contactInfo.phoneNumber && (
        <p className={styles.phoneNumber}>
          {`+1.${contactInfo.phoneNumber.substr(0, 3)}.${contactInfo.phoneNumber.substr(3, 3)}.${contactInfo.phoneNumber.substr(6, 4)}`}
        </p>
      )}
      {contactInfo.email && (
        <a className={styles.email} href={'mailto:' + contactInfo.email}>{contactInfo.email}</a>
      )}
      {contactInfo.address && (
        <p className={styles.address} dangerouslySetInnerHTML={{ __html: contactInfo.address.split('\n').join('<br />') }} />
      )}
    </section>
  )
}
