import { useRecoilState } from 'recoil'
import { followersState } from 'recoil/atoms'
import { Perfil } from 'types'
import { lstorage } from 'utils'

const useFollow = () => {
  const [followers, setFollowers] = useRecoilState(followersState)

  const getFollower = (email: string) => {
    return followers.find((follower) => follower.email === email)
  }

  const follow = (perfil: Perfil) => {
    setFollowers((prev) => {
      const followersUpdated = [...prev, perfil]
      lstorage('set', 'followers', followersUpdated)
      return followersUpdated
    })
  }

  const unfollow = (perfil: Perfil) => {
    setFollowers((prev) => {
      const followersUpdated = prev.filter(
        (follower) => follower.email !== perfil.email
      )

      lstorage('set', 'followers', followersUpdated)
      return followersUpdated
    })
  }

  const handleFollow = (perfil: Perfil) => {
    const alreadyFollowing = getFollower(perfil.email)

    if (alreadyFollowing) unfollow(perfil)
    else follow(perfil)
  }

  return {
    followers,
    getFollower,
    handleFollow
  }
}

export default useFollow
