import { FC } from 'react'
import { Perfil } from 'types'
import useFollow from './useFollow'

type Props = {
  perfil: Perfil
}

const FollowButton: FC<Props> = ({ perfil }) => {
  const { handleFollow, getFollower } = useFollow()

  const isFollowing = () => !!getFollower(perfil?.email)

  const bgButton = `bg-${isFollowing() ? 'red' : 'blue'}-500`
  const textButton = isFollowing() ? 'Unfollow' : 'Follow'

  const handleClickFollow = () => handleFollow(perfil)

  return (
    <button
      onClick={handleClickFollow}
      className={`mx-auto ${bgButton} px-4 py-2 text-white`}
    >
      {textButton}
    </button>
  )
}

export default FollowButton
