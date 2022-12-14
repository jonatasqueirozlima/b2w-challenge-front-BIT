import { useRecoilState } from 'recoil'
import { currentPerfilState } from 'recoil/atoms'

import FollowButton from '../../../Follow-button/FollowButton'
import TryNextOneButton from './TryNextOneButton'

const MainApresentation = () => {
  const [perfil, setPerfil] = useRecoilState(currentPerfilState)

  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-y-2 border border-gray-500 bg-white py-4">
      <div className="h-40 w-40">
        <img
          className="h-full w-full rounded-full"
          src={perfil?.picture.large}
          alt=""
        />
      </div>
      <div className="relative  flex w-full justify-between">
        <FollowButton perfil={perfil} />
        <TryNextOneButton perfil={perfil} setPerfil={setPerfil} />
      </div>
      <span>
        {perfil?.name.first} {perfil?.name.last}
      </span>
      <span>
        {perfil?.location.city}, {perfil?.location.country}
      </span>
    </section>
  )
}

export default MainApresentation
