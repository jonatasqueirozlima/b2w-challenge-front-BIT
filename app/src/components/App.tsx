import { RecoilRoot } from 'recoil'
import Contact from './Contact'
import Header from './Header'

function App() {
  return (
    <RecoilRoot>
      <section className="flex h-screen flex-col items-center bg-blue-400 pt-16">
        <Header />

        <span className="mb-4 text-4xl text-white">
          Find new users like you
        </span>
        <Contact />
      </section>
    </RecoilRoot>
  )
}

export default App
