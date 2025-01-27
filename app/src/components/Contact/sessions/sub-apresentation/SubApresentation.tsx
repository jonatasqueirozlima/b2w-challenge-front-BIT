import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { currentPerfilState } from 'recoil/atoms'
import ContactInfo from './ContactInfo'
import PersonalInfo from './PersonalInfo'

type Props = {
  title: string
}

const SubApresentation: FC<Props> = ({ title }) => {
  const [perfil] = useRecoilState(currentPerfilState)
  const isContactInfo = title === 'Contact Info'

  return (
    <section
      className="col-span-2 h-fit border shadow-lg bg-white p-4
                sm:col-span-1"
    >
      <span className="font-bold">{title}</span>

      {isContactInfo && perfil && <ContactInfo info={perfil} />}
      {!isContactInfo && perfil && <PersonalInfo info={perfil} />}
    </section>
  )
}

export default SubApresentation
