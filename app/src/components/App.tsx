import { RecoilRoot } from 'recoil'
import Contact from './Contact'
import Header from './Header'
import Suggestion from './Suggestion'

function App() {
  return (
    <RecoilRoot>
      <section className="flex min-h-screen flex-col items-center bg-blue-400 py-16">
        <Header />

        <span className="mb-4 text-4xl text-white">
          Find new users like you
        </span>
        <Contact />
        <Suggestion />
      </section>
    </RecoilRoot>
  )
}

export default App
