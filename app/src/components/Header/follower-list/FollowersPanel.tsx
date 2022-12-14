import { FC, Ref } from 'react'
import { Perfil } from 'types'
import FollowerCard from './FollowerCard'

type Props = {
  followers: Perfil[]
  showPanel: boolean
}

const FollowersPanel: FC<Props> = ({ followers, showPanel }) => {
  return (
    <>
      {showPanel && (
        <section className="absolute -top-1 -right-1 z-10 bg-white p-4 shadow-xl">
          {followers?.map((follow) => (
            <FollowerCard key={follow.email} perfil={follow} />
          ))}
        </section>
      )}
    </>
  )
}

export default FollowersPanel
