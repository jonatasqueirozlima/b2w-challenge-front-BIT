import { FC, MouseEventHandler } from 'react'
import { SetterOrUpdater } from 'recoil'
import { getPerfil } from 'services/api'
import { Perfil } from 'types'

type Props = {
  setPerfil: SetterOrUpdater<Perfil | null>
}

const TryNextOneButton: FC<Props> = ({ setPerfil }) => {
  const getNextPerfil: MouseEventHandler<HTMLButtonElement> = () => {
    getPerfil().then((response) => {
      const perfil_ = response.data?.results[0]

      setPerfil(perfil_)
    })
  }

  return (
    <button
      onClick={getNextPerfil}
      className="absolute right-0 mr-3 self-end border px-4 py-2 shadow-md"
    >
      try the next one
    </button>
  )
}

export default TryNextOneButton
