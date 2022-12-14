import useFollow from 'components/Follow-button/useFollow'
import FollowersContainer from './FollowersContainer'

const FollowerList = () => {
  const { followers } = useFollow()
  return (
    <>{followers.length > 0 && <FollowersContainer followers={followers} />}</>
  )
}

export default FollowerList
