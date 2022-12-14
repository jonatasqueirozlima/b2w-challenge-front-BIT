import FollowButton from 'components/Follow-button/FollowButton'
import { FC } from 'react'
import { Perfil } from 'types'

type Props = {
  perfil: Perfil
}

const SuggestionCard: FC<Props> = ({ perfil }) => {
  const { name, location } = perfil

  return (
    <section className="flex flex-col p-4 min-w-[200px] gap-y-2 items-center justify-center bg-white">
      <img
        className="h-12 w-12 rounded-full"
        src={perfil.picture.large}
        alt={`${name.first} ${name.last}`}
      />
      <span>
        {name.first} {name.last}
      </span>
      <span>
        {location.city}, {location.country}
      </span>
      <FollowButton perfil={perfil} />
    </section>
  )
}

export default SuggestionCard
