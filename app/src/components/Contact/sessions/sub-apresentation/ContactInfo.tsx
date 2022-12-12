import { FC, useState } from 'react'
import { Perfil } from 'types'

type Props = {
  info: Perfil
}

const ContactInfo: FC<Props> = ({ info: { cell, email, phone } }) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleContainer = () => setIsHidden((prev) => !prev)

  return (
    <section>
      <ul className={`${isHidden && 'max-h-14'} overflow-hidden py-2`}>
        <li>phone: {phone}</li>
        <li>cell: {cell}</li>
        <li>email: {email}</li>
      </ul>
      <section className="mt-2 pt-3 border-t-2 border-gray-500">
        <button className="bg-blue-200 px-4 py-2" onClick={handleContainer}>
          See more
        </button>
      </section>
    </section>
  )
}

export default ContactInfo
