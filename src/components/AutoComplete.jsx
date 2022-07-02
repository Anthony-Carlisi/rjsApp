function AutoComplete({ options, input, onClick }) {
  const filteredOptions = options.filter(
    (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
  )
  return (
    <ul>
      <li>
        {filteredOptions.map((value, index) => (
          <ul key={index}>
            <li value={value} onClick={onClick}>
              {value}
            </li>
          </ul>
        ))}
      </li>
    </ul>
  )
}

export default AutoComplete
