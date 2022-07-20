import { Dropdown, List } from './AutoComplete.styled'

function AutoComplete({ index, filtered, updateInput, updateIndex, name }) {
  const handleClick = (item, name) => {
    updateInput(item, name)
    updateIndex(0)
  }

  return (
    <Dropdown id='Dropdown'>
      {filtered.map((item, id) => (
        <List
          aria-selected={id === index}
          key={id}
          value={item}
          name={name}
          onClick={() => handleClick(item, name)}
        >
          {item}
        </List>
      ))}
    </Dropdown>
  )
}

export default AutoComplete
