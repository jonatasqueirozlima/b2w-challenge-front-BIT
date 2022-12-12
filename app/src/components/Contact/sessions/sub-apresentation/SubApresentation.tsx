import { FC, useEffect, useState } from 'react'
import { Perfil } from 'types'
import ContactInfo from './ContactInfo'
import PersonalInfo from './PersonalInfo'

type Props = {
  title: string
  info: Perfil
}

const SubApresentation: FC<Props> = ({ title, info }) => {
  const isContactInfo = title === 'Contact Info'

  return (
    <section className="h-fit border border-gray-500 bg-white p-4">
      <span className="font-bold">{title}</span>

      {isContactInfo && info && <ContactInfo info={info} />}
      {!isContactInfo && info && <PersonalInfo info={info} />}
    </section>
  )
}

export default SubApresentation
