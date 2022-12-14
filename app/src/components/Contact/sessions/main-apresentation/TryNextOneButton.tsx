import useFollow from 'components/Follow-button/useFollow'
import { FC, MouseEventHandler } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { suggestionsState } from 'recoil/atoms'
import { getPerfil } from 'services/api'
import { Perfil } from 'types'
import { lstorage } from 'utils'

type Props = {
  setPerfil: SetterOrUpdater<Perfil | null>
  perfil: Perfil | null
}

const TryNextOneButton: FC<Props> = ({ setPerfil, perfil }) => {
  const [, setSuggestion] = useRecoilState(suggestionsState)
  const { getFollower } = useFollow()

  const getNextPerfil: MouseEventHandler<HTMLButtonElement> = () => {
    addAsSuggestion()

    getPerfil().then((response) => {
      const perfil_ = response.data?.results[0]

      setPerfil(perfil_)
    })
  }

  const addAsSuggestion = () => {
    const isFollowing = !!getFollower(perfil?.email || '')

    if (!isFollowing) {
      setSuggestion((prev) => {
        const suggestionsUpdated = [...prev, perfil] as Perfil[]
        lstorage('set', 'suggestions', suggestionsUpdated)
        return suggestionsUpdated
      })
    }
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
