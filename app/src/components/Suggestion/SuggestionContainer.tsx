import { FC } from 'react'

type Props = {
  children: JSX.Element[]
}

const SuggestionContainer: FC<Props> = ({ children }) => {
  return (
    <section
      className="mt-6 w-full px-4 
                 xl:px-0 xl:w-6/12 xl:max-w-3xl"
    >
      <span className="text-2xl font-bold text-black">Suggestion 4you</span>
      <section className="mt-2 flex gap-x-3 py-3 overflow-x-auto">
        {children.length === 0 ? (
          <section className="bg-white w-full p-4 border shadow-lg">
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
