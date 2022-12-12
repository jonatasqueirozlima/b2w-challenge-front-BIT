import { MouseEventHandler } from 'react'
import { useRecoilState } from 'recoil'
import { currentPerfilState } from 'recoil/atoms'
import { getPerfil } from 'services/api'

const MainApresentation = () => {
  const [perfil, setPerfil] = useRecoilState(currentPerfilState)

  const getNextPerfil: MouseEventHandler<HTMLButtonElement> = () => {
    getPerfil().then((response) => {
      const perfil_ = response.data?.results[0]
      setPerfil(perfil_)
    })
  }

  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-y-2 border bg-white py-4 border-gray-500">
      <div className="h-40 w-40">
        <img
          className="h-full w-full rounded-full"
          src={perfil?.picture.large}
          alt=""
        />
      </div>
      <div className="relative  flex w-full justify-between">
        <button className="mx-auto bg-blue-500 px-4 py-2 text-white">
          Follow
        </button>
        <button
          onClick={getNextPerfil}
          className="absolute right-0 mr-3 self-end border px-4 py-2 shadow-md"
        >
          try the next one
        </button>
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
