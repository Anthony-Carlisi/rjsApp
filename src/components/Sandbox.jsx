import {
  Container,
  Label,
  Input,
  Icon,
  InputContainer,
  ErrorLabel,
  Dropdown,
  Border,
} from './styles/Sandbox.styled'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Sandbox({
  onChange,
  value,
  label,
  onKeyPress,
  errorLabel,
  type,
  maxLength,
  size,
  icon,
  onClick,
  inputMode,
  onFocus,
  onBlur,
  name,
  options,
  onClickOptions,
}) {
  const [inputValue, setInputValue] = useState(value)
  const [input, setInput] = useState(value)
  const options1 = [
    1,
    2,
    '3',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const handleClick = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    console.log(e.target)
    value = '100'
  }

  // value = '50'
  return (
    <div>
      <Container>
        <Border>
          <Icon id='icon' icon={faDollarSign} />
          <InputContainer>
            <Label>label</Label>
            <Input
              size={size}
              onFocus={onFocus}
              onBlur={onBlur}
              type={'select'}
              maxLength={maxLength}
              value={value}
              onChange={onChange}
              onKeyPress={onKeyPress}
              onClick={onClick}
              inputMode={inputMode}
              name={name}
            />
            {/* <option>test</option>
            <option>test</option>
            <option>test</option> */}
          </InputContainer>
        </Border>
        {options1 && (
          <Dropdown width={size}>
            {options1.map((value, index) => (
              <ul key={index}>
                <li>
                  <button value={value} onClick={handleClick}>
                    {value}
                  </button>
                </li>
              </ul>
            ))}
          </Dropdown>
        )}
      </Container>
      <ErrorLabel>test</ErrorLabel>
    </div>
  )
}

export default Sandbox
