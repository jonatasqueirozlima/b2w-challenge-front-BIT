import Loading from 'components/Loading'
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
      const perfil = response.data?.results[0]
      setPerfil(perfil)
    })
  }, [])

  return (
    <ContactContainer>
      {perfil ? (
        <>
          <MainApresentation />
          <SubApresentation title="Personal Info" />
          <SubApresentation title="Contact Info" />
        </>
      ) : (
        <section className="bg-white col-span-2 py-32">
          <Loading />
        </section>
      )}
    </ContactContainer>
  )
}

export default Contact
