import FollowerList from './follower-list'

const Header = () => {
  return (
    <header className="fixed top-0 w-screen bg-blue-400">
      <div className="mx-auto flex w-6/12 justify-between py-4 text-white">
        <span>users_like.me</span>
        <FollowerList />
      </div>
    </header>
  )
}

export default Header
