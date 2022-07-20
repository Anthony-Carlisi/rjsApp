import {
  Container,
  Label,
  Input,
  Border,
  Icon,
  Error,
  IconWrapper,
  List,
  Dropdown,
} from './styles/InputField.styled'

import { useRef, useEffect } from 'react'

function InputField({
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
  autoComplete,
  options,
  onClickDropdown,
  onKeyDown,
  optionsIndex,
}) {
  const itemsRef = useRef([])
  // you can access the elements with itemsRef.current[n]

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, options.length)
  }, [options])

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
          onKeyDown={onKeyDown}
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
            <Dropdown id='Dropdown'>
              {options.map((item, id) => (
                <List
                  ref={(el) => (itemsRef.current[id] = el)}
                  aria-selected={id === optionsIndex}
                  key={id}
                  name={name}
                  onClick={() => onClickDropdown(item, name)}
                >
                  {item}
                </List>
              ))}
            </Dropdown>
          )}
      </Border>
    </Container>
  )
}

export default InputField
