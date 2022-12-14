import { FC, useEffect, useState } from 'react'
import { Perfil } from 'types'
import useFollow from './useFollow'

type Props = {
  perfil: Perfil | null
}

const FollowButton: FC<Props> = ({ perfil }) => {
  const { followers, handleFollow, getFollower } = useFollow()
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    setIsFollowing(!!getFollower(perfil.email))
  }, [perfil, followers])

  const colorButton = isFollowing ? 'bg-red-500' : 'bg-blue-500'
  const textButton = isFollowing ? 'Unfollow' : 'Follow'
  const handleClickFollow = () => handleFollow(perfil!)

  return (
    <button
      onClick={handleClickFollow}
      className={`mx-auto ${colorButton} px-4 py-2  text-white`}
    >
      {textButton}
    </button>
  )
}

export default FollowButton
