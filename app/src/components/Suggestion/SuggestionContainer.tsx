import { FC } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const SuggestionContainer: FC<Props> = ({ children }) => {
  return (
    <section className="mt-6 w-6/12">
      <span className="text-2xl font-bold text-white">Suggestion 4you</span>
      <section className="mt-2 flex gap-x-3 py-3 overflow-x-auto">
        {children}
      </section>
    </section>
  )
}

export default SuggestionContainer
