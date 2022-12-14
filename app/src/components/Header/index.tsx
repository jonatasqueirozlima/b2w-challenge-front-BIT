import FollowerList from './follower-list'

const Header = () => {
  return (
    <header className="fixed top-0 w-screen bg-blue-400 shadow-lg">
      <div
        className="
      text-white flex justify-between p-4  
      sm:mx-auto  sm:w-6/12  sm:py-4 "
      >
        <span>users_like.me</span>
        <FollowerList />
      </div>
    </header>
  )
}

export default Header
