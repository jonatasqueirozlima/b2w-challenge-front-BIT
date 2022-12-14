import { FC, useState } from 'react'
import { RiArrowDropDownLine as ArrowIcon } from 'react-icons/ri'
import { Perfil } from 'types'
import FollowersPanel from './FollowersPanel'

type Props = {
  followers: Perfil[]
}

const FollowersContainer: FC<Props> = ({ followers }) => {
  const [showPanel, setShowPanel] = useState(false)

  const handlePanel = () => setShowPanel((prev) => !prev)
  const followingTextColor = showPanel ? 'text-blue-500' : 'text-white'

  return (
    <section className="relative">
      <button
        onClick={handlePanel}
        className={`flex items-center font-bold ${followingTextColor}`}
      >
        <span className="z-20">following {followers.length} users</span>
        <ArrowIcon className={`z-20 text-2xl ${followingTextColor}`} />
      </button>

      <FollowersPanel showPanel={showPanel} followers={followers} />
    </section>
  )
}

export default FollowersContainer
