import Suggestion from 'components/Suggestion'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { currentPerfilState } from 'recoil/atoms'
import { getPerfil } from 'services/api'

import ContactContainer from './Container'
import MainApresentation from './sessions/main-apresentation/MainApresentation'
import SubApresentation from './sessions/sub-apresentation/SubApresentation'

const Contact = () => {
  const [perfil, setPerfil] = useRecoilState(currentPerfilState)

  useEffect(() => {
    getPerfil().then((response) => {
      const perfil_ = response.data?.results[0]
      setPerfil(perfil_)
    })
  }, [])

  return (
    <ContactContainer>
      <MainApresentation />
      <SubApresentation info={perfil!} title="Personal Info" />
      <SubApresentation info={perfil!} title="Contact Info" />
      {/* <Suggestion /> */}
    </ContactContainer>
  )
}

export default Contact
