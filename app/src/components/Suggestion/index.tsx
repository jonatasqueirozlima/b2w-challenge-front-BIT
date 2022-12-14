import { useRecoilState } from 'recoil'
import { suggestionsState } from 'recoil/atoms'
import SuggestionCard from './SuggestionCard'
import SuggestionContainer from './SuggestionContainer'

const Suggestion = () => {
  const [suggestions] = useRecoilState(suggestionsState)

  return (
    <SuggestionContainer>
      {suggestions?.map((perfil) => (
        <SuggestionCard key={perfil.email} perfil={perfil} />
      ))}
    </SuggestionContainer>
  )
}

export default Suggestion
