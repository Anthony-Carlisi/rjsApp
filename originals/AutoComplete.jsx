import { Container, List } from './styles/AutoComplete.styled'
import InputField from '../src/components/InputField'
function AutoComplete({ options, input, activeSuggestion }) {
  const filteredOptions = options.filter(
    (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
  )
  return (
    <Container>
      {filteredOptions.map((value, index) => (
        <List
          key={index}
          suggestion={activeSuggestion === index}
          value={value}
          // onClick={onClick}
        >
          {value}
        </List>
      ))}
    </Container>
  )
}

export default AutoComplete
