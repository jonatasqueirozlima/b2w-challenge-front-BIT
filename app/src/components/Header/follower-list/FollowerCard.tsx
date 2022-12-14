import FollowButton from 'components/Contact/sessions/main-apresentation/follow-button/FollowButton'
import { FC } from 'react'
import { Perfil } from 'types'

type Props = {
  perfil: Perfil
}

const FollowerCard: FC<Props> = ({ perfil }) => {
  const { name, location } = perfil

  return (
    <section className="-z-10 mt-6 flex min-w-[350px] items-center justify-between space-x-2">
      <div className="flex space-x-2">
        <img
          className="h-12 w-12 rounded-full"
          src={perfil.picture.large}
          alt=""
        />
        <div className="flex flex-col justify-center -space-y-2">
          <span className="text-black">
            {name.first} {name.last}
          </span>
          <span className="text-gray-500">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
      {/* <button className="bg-red-300">a</button> */}
      <FollowButton perfil={perfil} />
    </section>
  )
}

export default FollowerCard