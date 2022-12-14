import { RecoilRoot } from 'recoil'
import Contact from './Contact'
import Header from './Header'
import Suggestion from './Suggestion'

function App() {
  return (
    <RecoilRoot>
      <section className="flex min-h-screen flex-col items-center py-16 bgTwoColors">
        <Header />

        <span className="mb-4 text-4xl text-white text-center">
          Find new users like you
        </span>

        <Contact />
        <Suggestion />
      </section>
    </RecoilRoot>
  )
}

export default App
