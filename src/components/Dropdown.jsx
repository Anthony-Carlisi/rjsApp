import { DropdownContainer, List } from './styles/Dropdown.styled'

function Dropdown({ index, options, name, onClick, display }) {
  return (
    <DropdownContainer display={display} id='Dropdown'>
      {options.map((item, id) => (
        <List
          aria-selected={id === index}
          key={id}
          value={item}
          name={name}
          onClick={() => onClick(item, name)}
        >
          {item}
        </List>
      ))}
    </DropdownContainer>
  )
}

export default Dropdown
