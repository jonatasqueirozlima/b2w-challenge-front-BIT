import { FC } from 'react'

type Props = {
  children: JSX.Element[]
}

const SuggestionContainer: FC<Props> = ({ children }) => {
  return (
    <section className="mt-6 w-6/12">
      <span className="text-2xl font-bold text-white">Suggestion 4you</span>
      <section className="mt-2 flex gap-x-3 py-3 overflow-x-auto">
        {children.length === 0 ? (
          <section className="bg-white w-full p-4">
            <p>No suggestions for now</p>
          </section>
        ) : (
          children
        )}
      </section>
    </section>
  )
}

export default SuggestionContainer
