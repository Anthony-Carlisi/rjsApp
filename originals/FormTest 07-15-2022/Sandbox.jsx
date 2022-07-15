import {
  Container,
  Label,
  Input,
  Border,
  Icon,
  Error,
  IconWrapper,
  List,
  // Dropdown,
} from './styles/Sandbox.styled'

import { filterOptions } from './utils/Validations'
// import AutoComplete from './AutoComplete'
import { useState, useMemo } from 'react'
import Dropdown from './Dropdown'

function Sandbox({
  onClick,
  onChange,
  value,
  label,
  name,
  size,
  placeholder,
  type,
  LeadingIcon,
  LeadingIconOnClick,
  TrailingIcon,
  TrailingIconOnclick,
  error,
  onKeyDown,
  autoComplete,
  options,
  updateInput,
}) {
  // const [input, setInput] = useState(value)
  const [index, setIndex] = useState(0)
  const [filtered, setFiltered] = useState(options)

  useMemo(() => {
    if (options) {
      setIndex(0)
      setFiltered(filterOptions(options, value))
    }
  }, [options, value])

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        if (index === 0) return
        setIndex(index - 1)
        break

      case 'ArrowDown':
        e.preventDefault()
        if (index === filtered.length - 1) return
        setIndex(index + 1)
        break
      case 'Tab':
        e.preventDefault()
        updateInput(filtered[index], name)
        setIndex(0)
        break
      default:
        break
    }
    if (onKeyDown) onKeyDown(e)
  }

  // const updateInput = (input, name) => {
  //   // setInput(input)
  // }

  return (
    <Container>
      <Border>
        <IconWrapper>
          {LeadingIcon && (
            <Icon onClick={LeadingIconOnClick} icon={LeadingIcon} />
          )}
        </IconWrapper>
        <Input
          onClick={onClick}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          size={size}
          icon={LeadingIcon}
          autoComplete={autoComplete}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <Label icon={LeadingIcon}>{label}</Label>
        <IconWrapper style={{ width: '40.4px' }}>
          {TrailingIcon && (
            <Icon onClick={TrailingIconOnclick} icon={TrailingIcon} />
          )}
        </IconWrapper>
        <Error>{error}</Error>
        {options &&
          options.filter((item) => {
            return item.toLowerCase() === value.toLowerCase()
          }).length === 0 && (
            <Dropdown
              options={filtered}
              name={name}
              index={index}
              onClick={(item, name) => updateInput(item, name)}
            />
          )}
        {/* {options &&
          options.filter((item) => {
            return item.toLowerCase() === value.toLowerCase()
          }).length === 0 && (
            <Dropdown id='Dropdown'>
              {filtered.map((item, id) => (
                <List
                  aria-selected={id === index}
                  key={id}
                  value={item}
                  name={name}
                  onClick={() => updateInput(item, name)}
                >
                  {item}
                </List>
              ))}
            </Dropdown>
          )} */}
      </Border>
    </Container>
  )
}

export default Sandbox
